import {
  FETCH_LOGIN_FAIL,
  FETCH_LOGIN_REQUEST,
  FETCH_PROFILE_REQUEST,
  FETCH_LOGIN_SUCCESS,
  LOGOUT_REQUEST,
} from "./type";

export const logoutUserRequest = () => ({
  type: LOGOUT_REQUEST,
});

export const fetchLoginRequest = (data) => ({
  type: FETCH_LOGIN_REQUEST,
  payload: data,
});

export const fetchProfileRequest = (data) => ({
  type: FETCH_PROFILE_REQUEST,
  payload: data,
});

export const fetchLoginSuccess = (data) => ({
  type: FETCH_LOGIN_SUCCESS,
  payload: data,
});

export const fetchLoginFail = (data) => ({
  type: FETCH_LOGIN_FAIL,
  payload: data,
});
