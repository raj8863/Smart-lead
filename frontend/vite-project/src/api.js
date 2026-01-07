import axios from "axios";

const API = axios.create({
  baseURL: "https://smart-lead-backend5.onrender.com",
});

export default API;
