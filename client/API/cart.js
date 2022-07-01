const axios = require("axios");

export const cartApi = (token) =>
  axios.get(`${process.env.API_URL}/cart`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const addToCartApi = (data, token) =>
  axios.post(`${process.env.API_URL}/cart`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const removeFromCartApi = (productId, token) =>
  axios.delete(`${process.env.API_URL}/cart/${productId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
