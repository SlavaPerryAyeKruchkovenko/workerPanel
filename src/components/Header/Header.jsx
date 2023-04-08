import React from "react";
import "./header.css";
import "@Styles/app.css";

const Header = ({haveEndSession = false, endSession,haveExit=false,exit}) => {
    return (
        <header className="header">
            <div>
                <span className="header-logo">ЦЧ</span>
                <span className="header-logo ml-2">УГМК</span>
            </div>
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