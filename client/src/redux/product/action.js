import {
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from "./type";

export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (data) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: data,
});

export const fetchProductsFail = (data) => ({
  type: FETCH_PRODUCTS_FAIL,
  payload: data,
});
