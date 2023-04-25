const express = require('express');
const app = express();
const http = require('http').createServer(app);
const cors = require('cors');
const dotenv = require('dotenv').config();

const options = {
    cors: {
        origin: 'http://spanish-lab-client.vercel.app/',
        methods: ['GET', 'POST']
    }
};
const io = require('socket.io')(http, options);


// Enable CORS for all routes
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/openai', require('./routes/openaiRoutes'));

const rooms = new Map();

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('joinRoom', (roomId) => {
        const isNewRoom = !rooms.has(roomId);
        const room = rooms.get(roomId) || { users: new Set(), teacher: null, answers: [] };

        if (isNewRoom) {
            room.teacher = socket.id;
            socket.emit('teacher');
        }

        room.users.add(socket.id);
        rooms.set(roomId, room);

        socket.join(roomId);
        console.log(`User (${socket.id}) joined room: ${roomId}`);
        console.log(`Teacher: ${room.teacher}`);
    });

    socket.on('newAnswer', (data) => {
        const room = rooms.get(data.roomId);
        if (room) {
          console.log(data.answer);
            room.answers.push(data.answer);
            io.to(data.roomId).emit('receiveAnswer', data.answer);
        }
    });

    socket.on('nextPrompt', (roomId) => {
        const room = rooms.get(roomId);
        if (room && socket.id === room.teacher) {
            room.answers = [];
            io.to(roomId).emit('nextPrompt');
        }
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');

        for (const [roomId, room] of rooms.entries()) {
            room.users.delete(socket.id);
            if (room.teacher === socket.id) {
                room.teacher = room.users.values().next().value;
            }
            if (room.users.size === 0) {
                rooms.delete(roomId);
            }
        }
    });
});


const PORT = process.env.PORT || 3001;
http.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});
