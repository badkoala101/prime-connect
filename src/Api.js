import axios from 'axios';
 export const BASEURL ="http://localhost:8000/api";



const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Laravel API URL
});

export default api;