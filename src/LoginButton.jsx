import React from "react";
import login from './login.png';
import './App.css';

const LoginButton = () => {
    return (
        <div>
            <img src ={login} alt='login button' className="login"/>
        </div>
    )
}

export default LoginButton;