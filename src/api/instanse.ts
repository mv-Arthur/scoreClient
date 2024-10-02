import axios from "axios";

const API_URL = "http://174.16.100.67:5000";

export const $api = axios.create({
     baseURL: API_URL,
});
