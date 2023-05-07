import React, {useEffect} from "react";
import "./login.css";
import backgroundImage from "@Assets/images/фон.png"
import Header from "@Components/Header/Header.jsx";
import apiManager from "@Helpers/apiManager";
import {useNavigate} from "react-router-dom";
import redirect from "@Helpers/redirect";

const Login = () => {
    const navigate = useNavigate();
    const loginRef = React.createRef();
    const passwordRef = React.createRef();
    const loginBody = {
        backgroundImage: 'url(' + backgroundImage + ')'
    }
    const checkUser = (token) => {
        redirect.redirect(navigate,token)
    }
    const login = (e) => {
        if (e) {
            e.preventDefault();
            const loginText = loginRef.current.value;
            const passwordText = passwordRef.current.value;
            apiManager.login(loginText, passwordText).then(value => {
                localStorage.setItem('token', value.data.token);
                checkUser(value.data.token);
            }).catch(e => {
                console.log(e)
                passwordRef.current.value = "";
            });
        }
    }
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            checkUser(token);
        }
    }, [])
    return (<div className="login">
        <Header/>
        <div className="login-body" style={loginBody}>
            <div className="login-body-content">
                <span className="login-body-content-header">Войти</span>
                <form className="login-body-form" onSubmit={login} method="post">
                    <input placeholder="логин" type="text"  required ref={loginRef}/>
                    <input placeholder="пароль" type="password" defaultValue="12345" required ref={passwordRef}/>
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