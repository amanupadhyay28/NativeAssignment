// src/services/api.js
import axios from 'axios';

const API_URL = 'https://random-data-api.com/api/users/random_user';

export const fetchUsers = (size = 80) => {
  return axios.get(`${API_URL}?size=${size}`);
};
