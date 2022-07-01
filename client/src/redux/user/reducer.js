import {
  FETCH_LOGIN_FAIL,
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  LOGOUT_REQUEST,
} from "./type";

const initialState = {
  status: "idle",
  user: null,
  errors: [],
};

export const userReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGOUT_REQUEST:
      return {
        status: "idle",
        user: null,
        errors: [],
      };
    case FETCH_LOGIN_REQUEST:
      return {
        ...state,
        status: "loading",
        errors: [],
      };
    case FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        status: "succeeded",
        errors: [],
        user: payload,
      };
    case FETCH_LOGIN_FAIL:
      return {
        ...state,
        status: "failed",
        user: null,
        errors: payload,
      };
    default:
      return state;
  }
};
