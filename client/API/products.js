const axios = require("axios");

export const productsApi = () =>
  axios.get(`${process.env.API_URL}/products`);

export const addProductApi = (data, token) =>
  axios.post(`${process.env.API_URL}/products`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const editProductApi = (data, token) =>
  axios.put(`${process.env.API_URL}/products/${data.productId}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const deleteProductApi = (productId, token) =>
  axios.delete(`${process.env.API_URL}/products/${productId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
