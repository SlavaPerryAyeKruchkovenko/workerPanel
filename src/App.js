import React from "react";
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Login from "@Pages/Login/login";
import Storage from "@Pages/Storage/storage";
import Admin from "@Pages/Admin/admin";
import MainPage from "@Pages/MainPage/mainPage";
import Checkpoint from "@Pages/Checkpoint/checkpoint";
import AdminUsers from "@Pages/AdminUsers/adminUsers";


function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/storage" element={<Storage/>}/>
            <Route path="/admin/upload" element={<Admin/>}/>
            <Route path="/admin/users" element={<AdminUsers/>}/>
            <Route path="/checkpoint" element={<Checkpoint/>}/>
            <Route path="*" element={<div>error</div>}/>
        </Routes>
    );
}

export default App;
