import { FETCH_PRODUCTS_FAIL, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from "./type";

const initialState = {
  status: "idle",
  products: null,
  errors: [],
};

export const productsReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        status: "loading",
        errors: [],
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        status: "succeeded",
        errors: [],
        products: payload,
      };
    case FETCH_PRODUCTS_FAIL:
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
