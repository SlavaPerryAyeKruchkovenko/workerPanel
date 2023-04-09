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
    const loginBody = {
        backgroundImage: 'url(' + backgroundImage + ')'
    }
    const logout = () => {
        apiManager.logout(token).then(() => {
            localStorage.removeItem("token");
            navigate("/login");
        }).catch(e=>{
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
    }, [])
    return (
        <div className="storage">
            <Header haveEndSession={haveSession} haveExit={true} exit={logout}/>
            <div className="storage-body" style={loginBody} id="storage">
                <Slider setHaveSession={setHaveSession}
                        slides={[<DropChanger user={user} token={token}/>, <HandleList/>]}/>
            </div>
        </div>)
}
export default Storage;