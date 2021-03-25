import axios from "axios";

const api = axios.create({
  baseURL: "http://inchina-api.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
