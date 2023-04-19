import React from "react";
import enterCode from "../pages/enterCode";
import enter from "../pages/enterCode.js"
import {redirect, Route, Routes, useNavigate, withRouter} from "react-router-dom";
import EnterCode from "../pages/enterCode";
import themePage from "./themePage";
const Account = () => {
    let navigate = useNavigate();
    const routeChange = () => {
        navigate('/enter-code');
    }
    return (
        <div className="standardPage">
            <h1>Account Page</h1>
        </div>
    );
};

export default Account;