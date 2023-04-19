import React, {useState} from "react";
import {redirect, Route, Routes, useNavigate, withRouter} from "react-router-dom";
import themePage from "./themePage";

const EnterCode = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks

    //const [roomId, setRoomId] = useState('');
    const roomId = localStorage.getItem("roomId")
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/room/${roomId}`);
    };
    function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }
    return (
        <div className="standardPage">
            <h2>GO TO WWW.SPANISHLAB.COM/ENTERCODE</h2>
            <div className= "centerContainer">
                <p>SPANISH STORY CODE: </p>
                <div className= "genCodeContainer">
                    <p>{roomId}</p>
                </div>
            </div>
                <div>
                    <button onClick={handleSubmit} className="primaryButton">
                        Ready to Play
                    </button>
                </div>
            
            </div>
    );
};

export default EnterCode;