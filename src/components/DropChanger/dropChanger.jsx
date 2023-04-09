import React, {useEffect} from "react";
import "./dropChanger.css";
import apiManager from "@Helpers/apiManager";
const $ = require('jquery');

const DropChanger = ({user,token}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [gates, setGates] = React.useState([]);
    const [selectedGate,setSelectedGate] = React.useState({
        name: "Выберите ворота",
    })
    const selectGate = (gate) => {
        setSelectedGate(gate);
        setIsOpen(false)
    }
    const openDropdown = () => {
        setIsOpen(true)
    }
    useEffect(() => {
        $("#storage").removeClass("body-auto");
    }, []);
    useEffect(()=>{
        if(token && user){


        }
    },[token,user])
    return (
        <div className="drop-changer">
            <div className="drop-changer-scheme">
                {!isOpen && (
                    <button className="drop-changer-select-btn" onClick={openDropdown}>{selectedGate.name}</button>
                )}
                {isOpen && gates.length > 0 && (
                    <ul className="gates-list">
                        {
                            gates.map(gate => (
                                <li onClick={()=>selectGate(gate)} key={"gate"+gate.id} className="gate-item">{gate.name}</li>
                            ))
                        }
                    </ul>
                )}
            </div>
        </div>
    )
}
export default DropChanger;