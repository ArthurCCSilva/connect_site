// src/services/authService.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const handleResponse = (res) => {
  if (res.status >= 400) throw new Error(res.data.message || 'Erro na requisição');
  return res.data;
};

export const registerUser = async (userData) => {
  const res = await axios.post(`${API_URL}/register`, userData);
  return handleResponse(res);
};

export const loginUser = async (userData) => {
  const res = await axios.post(`${API_URL}/login`, userData);
  return handleResponse(res);
};