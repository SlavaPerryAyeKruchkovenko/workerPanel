import React from "react";
import "./truck.css";

const Truck = ({truck}) => {
    return (
        <li className="truck" id={"truck_" + (truck ? truck.id : "0")}>
            <span className="truck-name">{truck ? truck.car_number : ''}</span>
            <div className="truck-order">
                <span className="truck-order-left">{truck.pass_number}</span>
            </div>
        </li>
    );
}
export default Truck;