import {
  FETCH_CART_FAIL,
  FETCH_CART_REQUEST,
  FETCH_CART_SUCCESS,
  LOGOUT_REQUEST,
} from "./type";

const initialState = {
  status: "idle",
  cart: null,
  errors: [],
};

export const cartReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGOUT_REQUEST:
      return {
        status: "idle",
        cart: null,
        errors: [],
      };
    case FETCH_CART_REQUEST:
      return {
        ...state,
        status: "loading",
        errors: [],
      };
    case FETCH_CART_SUCCESS:
      return {
        ...state,
        status: "succeeded",
        errors: [],
        cart: payload,
      };
    case FETCH_CART_FAIL:
      return {
        ...state,
        status: "failed",
        cart: null,
        errors: payload,
      };
    default:
      return state;
  }
};
