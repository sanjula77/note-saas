// src/api.js
import axios from 'axios';

// Use the environment variable or fallback to the default URL
const apiUrl = import.meta.env.VITE_API_URL || 'http://13.53.154.176:3002';

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
