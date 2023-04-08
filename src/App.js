import React from "react";
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Login from "@Pages/Login/login";
import Storage from "@Pages/Storage/storage";
import Admin from "@Pages/Admin/admin";

function App() {
    return (
        <Routes>
            <Route path="/" element={<div>main page</div>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/storage" element={<Storage/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="*" element={<div>error</div>}/>
        </Routes>
    );
}

export default App;
