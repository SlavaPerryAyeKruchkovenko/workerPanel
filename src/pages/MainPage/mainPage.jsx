import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        navigate("/login");
    })
    return(
        <div>main page</div>
    );
}
export default MainPage