// src/axiosInstance.js
import axios from "axios";
import apiUrl from "./apiConfig";

const axiosInstance = axios.create({
  baseURL: apiUrl,
  timeout: 10000, // Optional: Set a timeout for requests
});

export default axiosInstance;
