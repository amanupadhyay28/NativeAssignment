import axios from 'axios';
import {BASE_URL} from '../constants/api';

export const fetchUsers = (size = 80) => {
  return axios.get(`${BASE_URL}?size=${size}`);
};
