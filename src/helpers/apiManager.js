import axios from "axios";

const apiManager = {
    url: "http://10.68.44.87:3001",
    getConfig: (token = null) => {
        return {
            headers: {
                'Authorization': 'Bearer' + token,
                "Content-Type": 'application/json',
            }
        }
    },
    login: (login, password) => {
        return axios.post(apiManager.url + "/login", {
            login: login,
            password: password,
        }, apiManager.getConfig());
    },
    currentUser: (token) => {
        return axios.get(apiManager.url + "/user/me",  apiManager.getConfig(token));
    }
}
export default apiManager;