import axios from "axios";

const axiosInstance = axios.create({
  baseURL:"http://localhost:3000/api",
  withCredentials:true // browser send the cookies to server automatically at every aingle request
})

export default axiosInstance;;