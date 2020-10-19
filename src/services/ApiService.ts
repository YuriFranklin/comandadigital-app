import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.3:5454',
});

export default api;
