import axios from "axios";

const axiosInstance = axios.create({
  baseURL:import.meta.env.VITE_API_URL || "https://video-calling-interview-platform-2-ib2q.onrender.com/api",
  withCredentials:true // browser send the cookies to server automatically at every aingle request
})

export default axiosInstance;
