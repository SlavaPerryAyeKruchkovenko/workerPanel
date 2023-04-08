import React from "react";
import Header from "@Components/Header/Header";
import backgroundImage from "@Assets/images/фон.png"
import "./storage.css";
import Slider from "@Components/Slider/slider";

const Storage = () => {
    const [haveSession,setHaveSession] = React.useState(false)
    const loginBody = {
        backgroundImage: 'url(' + backgroundImage + ')'
    }
    return (
        <div className="storage">
            <Header haveEndSession={haveSession} haveExit={true}/>
            <div className="storage-body" style={loginBody} id="storage">
                <Slider setHaveSession={setHaveSession}/>
            </div>
        </div>)
}
export default Storage;