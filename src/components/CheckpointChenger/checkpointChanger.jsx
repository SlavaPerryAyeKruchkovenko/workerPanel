import React, {useEffect} from "react";
import apiManager from "@Helpers/apiManager";

const $ = require('jquery');

const CheckpointChanger = ({token,user,selectedCheckpoint,setSelectedCheckpoint}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [checkpoints, setCheckpoints] = React.useState([]);

    const selectCheckPoint = (checkpoint) => {
        setSelectedCheckpoint(checkpoint);
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
            apiManager.getFreeCheckpoint(token,user.factory_id).then(value=>{
                setCheckpoints(value.data);
            })
        }
    },[token,user])
    return (
        <div className="drop-changer">
            <div className="drop-changer-scheme">
                {!isOpen||checkpoints.length === 0? (
                    <button className="drop-changer-select-btn"
                            onClick={openDropdown}>{selectedCheckpoint.name}</button>
                ):''}
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