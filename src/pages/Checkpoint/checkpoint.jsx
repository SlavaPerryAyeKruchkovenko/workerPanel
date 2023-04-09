import React, {useEffect} from "react";
import Header from "@Components/Header/Header";
import backgroundImage from "@Assets/images/фон.png"
import Slider from "@Components/Slider/slider";
import CheckpointChanger from "@Components/CheckpointChenger/checkpointChanger";
import TruckList from "@Components/TruckList/truckList";
import redirect from "@Helpers/redirect";
import apiManager from "@Helpers/apiManager";
import {useNavigate} from "react-router-dom";

const CheckPoint = () => {
    const [selectedCheckpoint, setSelectedCheckpoint] = React.useState({
        id: undefined,
        name: "Выберите КПП",
    })
    const [token, setToken] = React.useState("");
    const [user, setUser] = React.useState(null);
    const navigate = useNavigate();
    const sendSelectCheckpoint = () => {
        apiManager.placeStart(token, selectedCheckpoint.id, user.id).then(value => {

        })
    }
    const canChangeSlide = () => {
        return selectedCheckpoint && (selectedCheckpoint.id !== undefined)
    }
    const loginBody = {
        backgroundImage: 'url(' + backgroundImage + ')'
    }
    const logout = () => {
        apiManager.logout(token).then(() => {
            localStorage.removeItem("token");
            navigate("/login");
        }).catch(e => {
            console.log(e)
        })
    }
    useEffect(() => {
        const token = localStorage.getItem("token");
        redirect.redirect(navigate, token, 3);
        setToken(token);
        apiManager.currentUser(token).then(value => {
            if (value.data) {
                setUser(value.data);
            }
        })
    }, []);
    return (
        <div className="storage">
            <Header haveExit={true} exit={logout}/>
            <div className="storage-body" style={loginBody} id="storage">
                <Slider slides={[
                    <CheckpointChanger selectedCheckpoint={selectedCheckpoint}
                                       setSelectedCheckpoint={setSelectedCheckpoint}
                                       user={user} token={token}/>,
                    <TruckList token={token} user={user}/>]} canOpenSecondFragment={canChangeSlide()}
                        secondCallback={sendSelectCheckpoint}/>
            </div>
        </div>);
}
export default CheckPoint;