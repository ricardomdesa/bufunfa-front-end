import axios from "axios";
<<<<<<< HEAD
// import apiURL from "../environment.js";

const instance = axios.create({
  // baseURL: `${apiURL}`,
  baseURL: "http://localhost:8002",
  timeout: 20000,
});

instance.interceptors.request.use(
  (config) => {
=======
import apiURL from "@/environment.js";

const instance = axios.create({
  baseURL: `${apiURL}`,
  timeout: 20000
});

instance.interceptors.request.use(
  config => {
>>>>>>> origin/dashboard_bf_frontend
    const token = sessionGet("access-token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers.common["Content-Type"] = "multipart/form-data";
    return config;
  },
<<<<<<< HEAD
  (error) => Promise.reject(error)
);

function sessionGet(key) {
  let stringValue = window.sessionStorage.getItem(key);
  if (stringValue !== null) {
    let value = JSON.parse(stringValue);
    let expirationDate = new Date(value.expirationDate);
=======
  error => Promise.reject(error)
);

function sessionGet(key) {
  const stringValue = window.sessionStorage.getItem(key);
  if (stringValue !== null) {
    const value = JSON.parse(stringValue);
    const expirationDate = new Date(value.expirationDate);
>>>>>>> origin/dashboard_bf_frontend
    if (expirationDate > new Date()) {
      return value.value;
    } else {
      window.sessionStorage.removeItem(key);
    }
  }
  return null;
}

function sessionSet(key, value, expirationInMin = 240) {
<<<<<<< HEAD
  let expirationDate = new Date(new Date().getTime() + 60000 * expirationInMin);
  let newValue = {
    value: value,
    expirationDate: expirationDate.toISOString(),
=======
  const expirationDate = new Date(
    new Date().getTime() + 60000 * expirationInMin
  );
  const newValue = {
    value: value,
    expirationDate: expirationDate.toISOString()
>>>>>>> origin/dashboard_bf_frontend
  };
  window.sessionStorage.setItem(key, JSON.stringify(newValue));
}

const ApiService = {
  get(url) {
    return new Promise((resolve, reject) => {
      instance
        .get(url)
<<<<<<< HEAD
        .then((res) => resolve(res))
        .catch((reason) => reject(reason));
=======
        .then(res => resolve(res))
        .catch(reason => reject(reason));
>>>>>>> origin/dashboard_bf_frontend
    });
  },

  postToken(user) {
    return new Promise((resolve, reject) => {
      instance
<<<<<<< HEAD
        .post(`/login`, `username=${user.username}&password=${user.password}`)
        .then((resp) => {
          sessionSet("access-token", resp.data.access_token);
          resolve(resp);
        })
        .catch((err) => {
=======
        .post("/login", `username=${user.username}&password=${user.password}`)
        .then(resp => {
          sessionSet("access-token", resp.data.access_token);
          resolve(resp);
        })
        .catch(err => {
>>>>>>> origin/dashboard_bf_frontend
          window.sessionStorage.removeItem("access-token");
          reject(err);
        });
    });
  },

  post(url, data) {
    return instance
      .post(url, data)
<<<<<<< HEAD
      .then((res) => res)
      .catch((reason) => Promise.reject(reason));
=======
      .then(res => res)
      .catch(reason => Promise.reject(reason));
>>>>>>> origin/dashboard_bf_frontend
  },

  awaitAll() {
    return axios
      .all(Array.from(arguments))
      .then(axios.spread((...responses) => responses))
<<<<<<< HEAD
      .catch((reasons) => Promise.reject(reasons));
=======
      .catch(reasons => Promise.reject(reasons));
>>>>>>> origin/dashboard_bf_frontend
  },

  logout() {
    window.sessionStorage.removeItem("access-token");
<<<<<<< HEAD
  },
=======
  }
>>>>>>> origin/dashboard_bf_frontend
};

export default ApiService;
