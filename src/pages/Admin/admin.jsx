import React from "react";
import "./admin.css";
import backgroundImage from "@Assets/images/фон.png"
import Header from "@Components/Header/Header.jsx";
import FileUpload from "@Components/FileUpload/fileUpload";


const Admin = () => {
    const adminBody = {
        backgroundImage: 'url(' + backgroundImage + ')'
    }
    return(<div className="login element">
        <Header/>
        <div className="login-body" style={adminBody}>
            <div className="nav-bar">
                <p className="nav-bar__title">Настройки</p>
                <div className="nav-bar__texts">
                    <a href="#">Пользователи</a>
                    <a href="#">КПП</a>
                    <a href="#">Заводы</a>
                    <a href="#">Справочники</a>
                    <a href="#" className="nav-bar__texts__selected">Загрузить таблицу</a>
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