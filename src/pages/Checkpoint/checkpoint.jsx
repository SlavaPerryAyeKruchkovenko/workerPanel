import React from "react";
import Header from "@Components/Header/Header";
import backgroundImage from "@Assets/images/фон.png"
import Slider from "@Components/Slider/slider";
import CheckpointChanger from "@Components/CheckpointChenger/checkpointChanger";
import TruckList from "@Components/TruckList/truckList";

const CheckPoint = () => {
    const loginBody = {
        backgroundImage: 'url(' + backgroundImage + ')'
    }
    return (
        <div className="storage">
            <Header haveExit={true}/>
            <div className="storage-body" style={loginBody} id="storage">
                <Slider slides={[<CheckpointChanger/>, <TruckList/>]}/>
            </div>
        </div>);
}
export default CheckPoint;