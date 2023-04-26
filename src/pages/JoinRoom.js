import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function JoinRoom() {
  const [roomId, setRoomId] = useState('');
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/room/${roomId}`);
  };

  return (
    <div className="standardPage">
      <h1>Join a room</h1>
      <form className ="displayBlock" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Room ID"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          required
        />
        <button className="primaryButton" type="submit">Join Room</button>
      </form>
    </div>
  );
}

export default JoinRoom;
