import axios from "axios";

const BASE_URL = "http://localhost:3000";

const axiosService = axios.create({
  baseURL: BASE_URL,
});

axiosService.interceptors.request.use((config) => {
  const userAuthData = JSON.parse(localStorage.getItem("userAuthData"));
  if (userAuthData) {
    config.headers.Authorization = `Basic ${userAuthData}`;
  }
  return config;
});

export default axiosService;
