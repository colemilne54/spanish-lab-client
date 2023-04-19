import React from "react";
import enterCode from "../pages/enterCode";
import enter from "../pages/enterCode.js"
import {redirect, Route, Routes, useNavigate, withRouter} from "react-router-dom";
import EnterCode from "../pages/enterCode";
import themePage from "./themePage";
import JoinRoom from "./JoinRoom";
const Home = () => {
    let navigate = useNavigate();
    const routeChange = () => {
        navigate('/join-room');
    }
    return (
        <div className="homePage">
            <h1>Choose type of play</h1>
            <div>
                <button className="primaryButton" onClick={routeChange}>
                    Ready to Play
                </button>
                <Routes>
                    <Route path ="/join-room" element={<JoinRoom />} />
                </Routes>
            </div>
        </div>
    );
};

export default Home;