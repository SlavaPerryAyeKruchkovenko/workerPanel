import React from "react";
import "./truck.css";

const Truck = ({truck}) => {
    return (
        <li className="truck" id={"truck_" + truck ? truck.id : "0"}>
            <span className="truck-name">{truck ? truck.name : ''}</span>
            <span className="truck-order">{truck.order}</span>
        </li>
    );
}
export default Truck;