import React, {useEffect} from "react";
import "./dropChanger.css";

const DropChanger = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [gates, setGates] = React.useState([]);
    const [selectedGate,setSelectedGate] = React.useState({
        name: "Выберете ворота",
    })
    const selectGate = (gate) => {
        setSelectedGate(gate);
        setIsOpen(false)
    }
    const openDropdown = () => {
        setIsOpen(true)
    }
    useEffect(() => {
        setGates([
            {
                id: 1,
                name: "cеверные ворота",
            },
            {
                id: 2,
                name: "восточные ворота",
            },
            {
                id: 3,
                name: "южные ворота",
            },
            {
                id: 4,
                name: "западные ворота",
            },
            {
                id: 5,
                name: "Юго-восточные ворота",
            }
        ])
    }, []);
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