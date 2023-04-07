import React from "react";
import Header from "@Components/Header/Header";
import backgroundImage from "@Assets/images/фон.png"
import "./storage.css";
import Slider from "@Components/Slider/slider";

const Storage = () => {
    const loginBody = {
        backgroundImage: 'url(' + backgroundImage + ')'
    }
    return (
        <div className="storage">
            <Header/>
            <div className="storage-body" style={loginBody}>
                <Slider/>
            </div>
        </div>)
}
export default Storage;