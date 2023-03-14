import axios from "axios";

export const api = axios.create({
  baseURL: "https://yourschool-api.onrender.com",
  timeout: 15000,
});
