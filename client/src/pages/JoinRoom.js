import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function JoinRoom() {
  const [roomId, setRoomId] = useState('');
  localStorage.setItem("roomId",roomId);
  let navigate = useNavigate();

  let isTeacher = localStorage.getItem("isTeacher")

  const handleSubmit = (e) => {
    e.preventDefault();
    if(isTeacher == "true"){
      navigate(`/enter-code`);
    } else{
      navigate(`/room/${roomId}`);
    }

  };

  return (
    <div className="standardPage">
      <h1>Join a Room</h1>
      <form className ="displayBlock" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Room ID"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          required
        />
        <div>
          <button className = "primaryButton" type="submit">Join Room</button>
        </div>
      </form>
    </div>

  );
}

export default JoinRoom;
