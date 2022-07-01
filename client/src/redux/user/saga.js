import { fetchLoginFail, fetchLoginSuccess } from "./action";
import { FETCH_LOGIN_REQUEST, FETCH_PROFILE_REQUEST } from "./type";
import { call, put, takeEvery } from 'redux-saga/effects'
import { getProfileApi, loginApi } from "../../../API/user";
import { alertService } from "../../components/Alert/alert.service";

function* fetchLogin({ payload }) {
  try {
    const data = yield call(loginApi, payload); 
    yield put(fetchLoginSuccess(data.data));
    localStorage.setItem("token", data.data.token);
    alertService.success("Đăng nhập thành công");
    window.location.replace("/");
  } catch (e) {
    yield put(fetchLoginFail(e.response.data));
    alertService.error(e.response.data);
  }
}

function* fetchProfile({ payload }) {
  try {
    const data = yield call(getProfileApi, payload); 
    yield put(fetchLoginSuccess(data.data));
  } catch (e) {
    yield put(fetchLoginFail(e.response.data));
    alertService.error(e.response.data);
  }
}

const rootUserSaga = [
  takeEvery(FETCH_LOGIN_REQUEST, fetchLogin),
  takeEvery(FETCH_PROFILE_REQUEST, fetchProfile),
];

export default rootUserSaga;