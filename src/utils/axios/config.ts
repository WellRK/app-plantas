import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://172.18.0.1:3000/',
});
