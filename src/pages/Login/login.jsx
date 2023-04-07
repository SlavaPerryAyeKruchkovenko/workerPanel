import React from "react";
import "./login.css";
import backgroundImage from "@Assets/images/фон.png"

const Login = () => {
    const loginBody = {
        backgroundImage: 'url(' + backgroundImage + ')'
    }
    return(<div className="login">
        <header className="login-header">
            <span className="login-header-logo">ЦЧ</span>
            <span className="login-header-logo ml-2">УГМК</span>
        </header>
        <div className="login-body" style={loginBody}>
            <div className="login-body-content">
                <span className="login-body-content-header">Войти</span>
                <form className="login-body-form">
                    <input placeholder="логин"/>
                    <input placeholder="пороль"/>
                    <div className="login-body-form-bottom">
                        <a href="#" className="forgot-btn">не помню пороль</a>
                        <button type="submit" className="submit-btn">Войти</button>
                    </div>
                </form>
            </div>
        </div>
    </div>);
}
export default Login;