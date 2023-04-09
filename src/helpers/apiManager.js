import axios from "axios";

const apiManager = {
    url: "http://10.68.44.55:3001",
    getConfig: (token = null) => {
        return {
            headers: {
                "Authorization": 'Bearer ' + token,
                "Content-Type": 'application/json'
            }
        }
    },
    login: (login, password) => {
        return axios.post(apiManager.url + "/auth/login", {
            login: login,
            password: password,
        }, apiManager.getConfig());
    },

    admin_fill: (payload,token) => {
        axios.post(apiManager.url + "/data/post", payload, apiManager.getConfig(token)).then(response => {
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
        axios.post(apiManager.url + "/data/post", payload, apiManager.getConfig())
    },

    getAllUsers: (token,factoryId) => {
        return axios.get(apiManager.url + "/auth/user/all?factory_id=1", apiManager.getConfig(token))
    },

    currentUser: (token) => {
        return axios.get(apiManager.url + "/auth/user/me", apiManager.getConfig(token));
    },
    placeStart: (token, placeId, userId) => {
        return axios.post(apiManager.url + "/place/start", {
            place_id: placeId,
            user_id: userId
        }, apiManager.getConfig(token));
    },
    getFreeCheckpoint: (token, factoryId) => {
        return axios.get(apiManager.url + `/place?typePlace=checkpoint&factory_id=${factoryId}`, apiManager.getConfig(token));
    },
    logout: (token) => {
        return axios.post(apiManager.url + "/auth/logout", {},apiManager.getConfig(token));
    },
    getAllCars: (token,user) => {
        return axios.get(apiManager.url + `/truck/all/noarrived?factory_id=${user.factory_id}`, apiManager.getConfig(token))
    },
    arrivedTruck: (token,truckId) => {
        return axios.post(apiManager.url + `/truck/arrived`,{
            truck_id: truckId
        }, apiManager.getConfig(token))
    },
    getFreeGates: (token,factoryId) => {
        return axios.get(apiManager.url + `/place?typePlace=gate&factory_id=${factoryId}`, apiManager.getConfig(token));
    },
    endSession: (token,placeId) => {
        return axios.post(apiManager.url + "/place/final", {
            place_id: placeId
        },apiManager.getConfig(token));
    },
    getAllArrivedTruck: (token,factoryId) => {
        return axios.get(apiManager.url + `/truck/all/arrived?factory_id=${factoryId}`, apiManager.getConfig(token));
    },
    blockRequests:(token, blockedCar) => {
        return axios.post(apiManager.url + "/truck/blocked",{
            blocked_car: blockedCar
        },apiManager.getConfig(token));
    },
    deleteTruck: (token, trackId) => {
        return axios.post(apiManager+"/truck/delete",{truck_id:trackId},apiManager.getConfig(token));
    },
    unblockCars: (token) => {

    }
}

export default apiManager;