import axios from "axios";

const apiManager = {
    url:"http://10.68.44.33:3001",
    getConfig:(token=null) => {
        return {
            headers: {
                "Authorization": 'Bearer ' + token,
                "Content-Type": 'application/json'
            }
        }
    },
    login: (login,password) => {
        axios.post("/auth/login",{
            login: login,
            password: password,
        },apiManager.getConfig());
    }
}