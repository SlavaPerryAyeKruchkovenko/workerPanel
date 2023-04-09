import React, {useEffect} from "react";
import "./admin.css";
import backgroundImage from "@Assets/images/фон.png"
import Header from "@Components/Header/Header.jsx";
import FileUpload from "@Components/FileUpload/fileUpload";
import apiManager from "@Helpers/apiManager";
import {useNavigate} from "react-router-dom";
import redirect from "@Helpers/redirect";


const Admin = () => {
    const navigate = useNavigate();
    const adminBody = {
        backgroundImage: 'url(' + backgroundImage + ')'
    }
    useEffect(()=>{
        const token = localStorage.getItem("token");
        redirect.redirect(navigate,token,1)
    })
    const logout = () => {
        const token = localStorage.getItem("token");
        apiManager.logout(token).then(() => {
            localStorage.removeItem("token");
            navigate("/login");
        }).catch(e=>{
            console.log(e)
        })
    }
    return(<div className="login element">
        <Header haveExit={true} exit={logout}/>
        <div className="login-body" style={adminBody}>
            <div className="nav-bar">
                <p className="nav-bar__title">Настройки</p>
                <div className="nav-bar__texts">
                    <a href="/admin/users">Пользователи</a>
                    <a href="#">КПП</a>
                    <a href="#">Заводы</a>
                    <a href="#">Справочники</a>
                    <a href="/admin/upload" className="nav-bar__texts__selected">Загрузить таблицу</a>
                </div>
            </div>
            <div className="upload-image">
                <p className="upload-image__">Загрузить таблицу</p>
                <FileUpload/>
                
            </div>
        </div>
    </div>);
}
export default Admin;