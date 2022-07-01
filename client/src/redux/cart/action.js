import {
  FETCH_CART_FAIL,
  FETCH_CART_REQUEST,
  FETCH_CART_SUCCESS,
  LOGOUT_REQUEST,
} from "./type";

export const logoutCartRequest = () => ({
  type: LOGOUT_REQUEST,
});

export const fetchCartRequest = (data) => ({
  type: FETCH_CART_REQUEST,
  payload: data,
});

export const fetchCartSuccess = (data) => ({
  type: FETCH_CART_SUCCESS,
  payload: data,
});

export const fetchCartFail = (data) => ({
  type: FETCH_CART_FAIL,
  payload: data,
});
