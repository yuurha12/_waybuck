//api Config
import axios from "axios";

export const API = axios.create({
//     baseURL: process.env.REACT_APP_BASEURL
    baseURL: "http://api2.chaostic-hoki.my.id:5005/api/v1/",
});

    export const setAuthToken = (token) => {
        if (token) {
            API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        } else {
            delete API.defaults.headers.common["Authorization"];
        }
    };
