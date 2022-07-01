const axios = require("axios");

export const registerApi = (data) =>
  axios.post(`${process.env.API_URL}/auth/register`, data);

export const editProfileApi = (data, token) =>
  axios.put(`${process.env.API_URL}/auth/${data.userId}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const loginApi = (data) =>
  axios.post(`${process.env.API_URL}/auth`, data);

export const resetApi = (data) =>
  axios.post(`${process.env.API_URL}/auth/password`, data);

export const changePassApi = (data, token) =>
  axios.post(`${process.env.API_URL}/auth/password/${data.userId}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getProfileApi = (token) =>
  axios.get(`${process.env.API_URL}/auth/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
