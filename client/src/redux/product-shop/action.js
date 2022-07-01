import {
  FETCH_PRODUCTS_SHOP_FAIL,
  FETCH_PRODUCTS_SHOP_REQUEST,
  FETCH_PRODUCTS_SHOP_SUCCESS,
  FETCH_LOGOUT_PRODUCTS_SHOP_REQUEST,
} from "./type";

export const fetchLogoutProductsShopRequest = () => ({
  type: FETCH_LOGOUT_PRODUCTS_SHOP_REQUEST,
});

export const fetchProductsShopRequest = (data) => ({
  type: FETCH_PRODUCTS_SHOP_REQUEST,
  payload: data,
});

export const fetchProductsShopSuccess = (data) => ({
  type: FETCH_PRODUCTS_SHOP_SUCCESS,
  payload: data,
});

export const fetchProductsShopFail = (data) => ({
  type: FETCH_PRODUCTS_SHOP_FAIL,
  payload: data,
});
