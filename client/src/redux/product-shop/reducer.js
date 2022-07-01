import { FETCH_PRODUCTS_SHOP_FAIL, FETCH_LOGOUT_PRODUCTS_SHOP_REQUEST, FETCH_PRODUCTS_SHOP_REQUEST, FETCH_PRODUCTS_SHOP_SUCCESS } from "./type";

const initialState = {
  status: "idle",
  products: null,
  errors: [],
};

export const productsShopReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PRODUCTS_SHOP_REQUEST:
      return {
        ...state,
        status: "loading",
        errors: [],
      };
    case FETCH_LOGOUT_PRODUCTS_SHOP_REQUEST:
      return {
        ...state,
        status: "idle",
        errors: [],
        products: null,
      };
    case FETCH_PRODUCTS_SHOP_SUCCESS:
      return {
        ...state,
        status: "succeeded",
        errors: [],
        products: payload,
      };
    case FETCH_PRODUCTS_SHOP_FAIL:
      return {
        ...state,
        status: "failed",
        errors: payload,
        products: null,
      };
    default:
      return state;
  }
};
