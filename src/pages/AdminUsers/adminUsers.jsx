import React, {useEffect} from "react";
import "./adminUsers.css";
import backgroundImage from "@Assets/images/фон.png"
import Header from "@Components/Header/Header.jsx";
import apiManager from "@Helpers/apiManager";
import {Edit} from "react-feather";
import {useNavigate} from "react-router-dom";
import redirect from "@Helpers/redirect";

const AdminUsers = () => {
    const navigate = useNavigate();
    const adminBody = {
        backgroundImage: 'url(' + backgroundImage + ')'
    }
    const [users, setUsers] = React.useState([])

    function getUsers() {
        const token = localStorage.getItem("token");
        apiManager.getAllUsers(token).then(value => {
            if (value.data) {
                setUsers(value.data)
            }
        })
    }
    const logout = () => {
        const token = localStorage.getItem("token");
        apiManager.logout(token).then(() => {
            localStorage.removeItem("token");
            navigate("/login");
        }).catch(e=>{
            console.log(e)
        })
    }
    useEffect(() => {
        const token = localStorage.getItem("token");
        redirect.redirect(navigate,token,1);
        getUsers();
    }, [])
    return (<div className="login element">
        <Header haveExit={true} exit={logout}/>
        <div className="login-body" style={adminBody}>
            <div className="nav-bar">
                <p className="nav-bar__title">Настройки</p>
                <div className="nav-bar__texts">
                    <a href="/admin/users" className="nav-bar__texts__selected">Пользователи</a>
                    <a href="#">КПП</a>
                    <a href="#">Заводы</a>
                    <a href="#">Справочники</a>
                    <a href="/admin/upload">Загрузить таблицу</a>
                </div>
            </div>
            <div className="container">
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Имя</th>
                        <th>Редактировать</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                        <tr key={user['id']}>
                            <td> {user['id']}</td>
                            <td>{user['full_name']}</td>
                            <td><Edit/></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>);
}
export default AdminUsers;