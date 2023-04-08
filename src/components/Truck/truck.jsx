import React from "react";
import "./truck.css";

const Truck = ({truck}) => {
    return (
        <li className="truck" id={"truck_" + (truck ? truck.id : "0")}>
            <span className="truck-name">{truck ? truck.name : ''}</span>
            <div className="truck-order">
                <span className="truck-order-left">{truck.order}</span>
            </div>
        </li>
    );
}
export default Truck;