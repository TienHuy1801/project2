import { fetchCartFail, fetchCartSuccess} from "./action";
import { FETCH_CART_REQUEST } from "./type";
import { call, put, takeEvery } from 'redux-saga/effects'
import { cartApi } from "../../../API/cart";

function* fetchCart({ payload }) {
  try {
    const data = yield call(cartApi, payload);
    yield put(fetchCartSuccess(data.data));
  } catch (e) {
    yield put(fetchCartFail(e.toString()));
  }
}

const rootCartSaga = [
  takeEvery(FETCH_CART_REQUEST, fetchCart),
];

export default rootCartSaga;