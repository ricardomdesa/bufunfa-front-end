import axios from "axios";
import apiURL from "../environment.js";

const instance = axios.create({
    baseURL: `${apiURL}`,
    timeout: 3000
});

instance.interceptors.request.use(
    config => {
        const token = sessionGet("access-token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        config.headers.common['Content-Type'] = "multipart/form-data";
        return config;
    },
    error => Promise.reject(error)
);

function sessionGet(key) {
    let stringValue = window.sessionStorage.getItem(key)
    if (stringValue !== null) {
        let value = JSON.parse(stringValue)
        let expirationDate = new Date(value.expirationDate)
        if (expirationDate > new Date()) {
            return value.value
        } else {
            window.sessionStorage.removeItem(key)
        }
    }
    return null
}

function sessionSet(key, value, expirationInMin = 60) {
    let expirationDate = new Date(new Date().getTime() + (60000 * expirationInMin))
    let newValue = {
        value: value,
        expirationDate: expirationDate.toISOString()
    }
    window.sessionStorage.setItem(key, JSON.stringify(newValue))
}

const ApiService = {

    get(url) {
        return new Promise((resolve, reject) => {
            instance.get(url)
                .then(res => resolve(res))
                .catch(reason => reject(reason));
        })
    },

    postToken(user) {
        return new Promise((resolve, reject) => {
            instance
                .post("/login", `username=${user.username}&password=${user.password}`)
                .then((resp) => {
                    sessionSet("access-token", resp.data.access_token);
                    resolve(resp)
                })
                .catch((err) => {
                    window.sessionStorage.removeItem("access-token");
                    reject(err)
                })
        })
    },

    post(url, data) {
        return instance.post(url, data)
            .then(res => res)
            .catch(reason => Promise.reject(reason));
    },

    awaitAll() {
        return axios.all(Array.from(arguments))
            .then(axios.spread((...responses) => responses))
            .catch(reasons => Promise.reject(reasons));
    },

    logout() {
        window.sessionStorage.removeItem("access-token");
    }

};

export default ApiService;