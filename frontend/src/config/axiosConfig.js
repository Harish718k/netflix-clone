import axios from 'axios';

const axios = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000", // fallback for local dev
  withCredentials: true, // if using cookies
});

export default axios;
