import React from "react";
import {redirect, Route, Routes, useNavigate, withRouter} from "react-router-dom";
import Home from "./home";


const Login = () => {
    let navigate = useNavigate();
    const routeChange = () =>{
        navigate('/home');
    }
    return (
        <div className= "loginPage">
            <form>
                <div className="loginContainer">
                    <h2>Login</h2>
                <div className= "loginInputs">
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" name="firstName" />
                </div>
                <div className="loginInputs">
                    <label htmlFor="password">Password</label>
                    <input id="username" type="text" name="username" />
                </div><br />
                <div className="centerContainer">
                    <button onClick={routeChange} className= "primaryButton">
                        Login
                    </button>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                    </Routes>
                </div>
                </div>
            </form>
        </div>
    );
};
export default Login;