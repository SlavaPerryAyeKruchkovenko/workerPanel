import React, { useEffect } from "react";
import "./adminUsers.css";
import backgroundImage from "@Assets/images/фон.png"
import Header from "@Components/Header/Header.jsx";
import apiManager from "@Helpers/apiManager";
import { Edit } from "react-feather";




const AdminUsers = () => {
    const adminBody = {
        backgroundImage: 'url(' + backgroundImage + ')'
    }
    const [users,setUsers] = React.useState([])

async function getUsers(){
    apiManager.get_all_users().then(value=>{
        if(value.data){
            setUsers(value.data)
        }
    })
}
    useEffect(()=>{getUsers()}, [])
    return(<div className="login element">
        <Header/>
        <div className="login-body" style={adminBody}>
            <div className="nav-bar">
                <p className="nav-bar__title">Настройки</p>
                <div className="nav-bar__texts">
                    <a href="#" className="nav-bar__texts__selected">Пользователи</a>
                    <a href="#">КПП</a>
                    <a href="#">Заводы</a>
                    <a href="#">Справочники</a>
                    <a href="#">Загрузить таблицу</a>
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