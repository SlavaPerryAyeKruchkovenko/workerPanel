import React, {useEffect} from "react";
import mock from "@Helpers/mock";

const $ = require('jquery');

const CheckpointChanger = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [checkpoints, setCheckpoints] = React.useState([]);
    const [selectedCheckpoint, setSelectedCheckpoint] = React.useState({
        name: "Выберите КПП",
    })
    const selectCheckPoint = (checkpoint) => {
        setSelectedCheckpoint(checkpoint);
        setIsOpen(false)
    }
    const openDropdown = () => {
        setIsOpen(true)
    }
    useEffect(() => {
        $("#storage").removeClass("body-auto");
        setCheckpoints(mock.getAllCheckpoints());
    }, []);
    return (
        <div className="drop-changer">
            <div className="drop-changer-scheme">
                {!isOpen && (
                    <button className="drop-changer-select-btn"
                            onClick={openDropdown}>{selectedCheckpoint.name}</button>
                )}
                {isOpen && checkpoints.length > 0 && (
                    <ul className="gates-list">
                        {
                            checkpoints.map(checkpoint => (
                                <li onClick={() => selectCheckPoint(checkpoint)} key={"gate" + checkpoint.id}
                                    className="gate-item">{checkpoint.name}</li>
                            ))
                        }
                    </ul>
                )}
            </div>
        </div>
    )
}
export default CheckpointChanger;