import React from "react";
import "./header.css";
import "@Styles/app.css";
import zn from "@Assets/images/zn.png";

const Header = ({haveEndSession = false, endSession,haveExit=false,exit}) => {
    return (
        <header className="header">
            <img src={zn} className="header-logo"/>
            <div>
                {
                    haveEndSession && (
                        <button className="header-end-session mr-2 pointer" onClick={endSession}>Завершить смену</button>
                    )
                }
                {
                    haveExit && (
                        <span className="header-logo pointer" onClick={exit}>Выход</span>
                    )
                }
            </div>
        </header>
    );
}
export default Header;