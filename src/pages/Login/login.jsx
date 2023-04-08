import React from "react";
import "./login.css";
import backgroundImage from "@Assets/images/фон.png"
import Header from "@Components/Header/Header.jsx";

const Login = () => {
    const loginBody = {
        backgroundImage: 'url(' + backgroundImage + ')'
    }
    return(<div className="login">
        <Header/>
        <div className="login-body" style={loginBody}>
            <div className="login-body-content">
                <span className="login-body-content-header">Войти</span>
                <form className="login-body-form">
                    <input placeholder="логин"/>
                    <input placeholder="пароль"/>
                    <div className="login-body-form-bottom">
                        <a href="#" className="forgot-btn">Не помню пароль</a>
                        <button type="submit" className="submit-btn">Войти</button>
                    </div>
                </form>
            </div>
        </div>
    </div>);
}
export default Login;