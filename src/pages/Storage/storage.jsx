import React, {useEffect} from "react";
import Header from "@Components/Header/Header";
import backgroundImage from "@Assets/images/фон.png"
import "./storage.css";
import Slider from "@Components/Slider/slider";
import DropChanger from "@Components/DropChanger/dropChanger";
import HandleList from "@Components/HandleLists/handleList";
import redirect from "@Helpers/redirect";
import {useNavigate} from "react-router-dom";
import apiManager from "@Helpers/apiManager";

const Storage = () => {
    const navigate = useNavigate();
    const [haveSession, setHaveSession] = React.useState(false)
    const [token, setToken] = React.useState("");
    const [user, setUser] = React.useState(null);
    const [selectedGate, setSelectedGate] = React.useState({
        id: undefined, name: "Выберите ворота",
    })
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
    const sendSelectGate = () => {
        apiManager.placeStart(token, selectedGate.id, user.id).then(value => {
            if (value.data) {

            }
        })
    }
    const canOpenSecondFragment = () => {
        return (selectedGate && selectedGate.id);
    }
    const endSession = () => {
        if (canOpenSecondFragment()) {
            apiManager.endSession(token, selectedGate.id).then(() => {
                navigate("/login");
            })
        }
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
    }, [])
    return (<div className="storage">
        <Header haveEndSession={haveSession} haveExit={true} exit={logout} endSession={endSession}/>
        <div className="storage-body" style={loginBody} id="storage">
            <Slider setHaveSession={setHaveSession} secondCallback={sendSelectGate}
                    canOpenSecondFragment={canOpenSecondFragment()}
                    slides={[<DropChanger user={user} token={token} selectedGate={selectedGate}
                                          setSelectedGate={setSelectedGate}/>,
                        <HandleList user={user} token={token}/>]}/>
        </div>
    </div>)
}
export default Storage;