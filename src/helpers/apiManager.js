import axios from "axios";

const apiManager = {
    getConfig:(token=null) => {
        return {
            headers: {
                "Authorization": 'Bearer ' + token,
                "Content-Type": 'application/json'
            }
        }
    },
    login: () => {
        axios.post("http://10.68.44.33:3001/login",{},apiManager.getConfig());
    }
}