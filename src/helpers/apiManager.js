import axios from "axios";

const apiManager = {

    getConfig:(token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODA5Njg2NzUsImV4cCI6MTY4MTA1NTA3NX0.__glWjModwpyTf3WWnWfJ7izrUHDPkhfembetVHY7TM") => {
        return {
            headers: {
                "Authorization": 'Bearer ' + token,
                "Content-Type": 'application/json'

            }
        }
    },
    login: (login, password) => {
        return axios.post(apiManager.url + "/login", {
            login: login,
            password: password,
        }, apiManager.getConfig());
    },

    admin_fill: (payload) => {
        axios.post("http://10.68.44.55:3001/data/post", payload, apiManager.getConfig()).then(response => {
            // Process response data here
            console.log(payload)
            console.log(response.data)
            return response.data;
          })
          .catch(error => {
            // Handle error here
            console.log(error);
          });
    },

    admin_save: (payload) => {
        axios.post("http://10.68.44.55:3001/data/post", payload, apiManager.getConfig())
    }
}

    currentUser: (token) => {
        return axios.get(apiManager.url + "/user/me",  apiManager.getConfig(token));
    },
    test: () => {
        return axios.get("http://10.68.44.87:3001/place?typePlace=checkpoint&factory_id=1",apiManager.getConfig(
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODA5Njc2MzcsImV4cCI6MTY4MTA1NDAzN30.NCAqS17GMQuGweEGyBQ0dA8KQI24S1wDfGgp-e6C7bo"
        ))
    }
}
export default apiManager;