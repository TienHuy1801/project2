const axios = require("axios");

export const orderApi = (token) =>
  axios.get(`${process.env.API_URL}/order`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const addOrderApi = (token) => 
  axios.post(`${process.env.API_URL}/order`, {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

