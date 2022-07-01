import { call, put, takeEvery } from "@redux-saga/core/effects";
import { productsApi } from "../../../API/products";
import { fetchProductsFail, fetchProductsSuccess } from "./action";
import { FETCH_PRODUCTS_REQUEST } from "./type";

function* fetchProducts() {
  try {
    const data = yield call(productsApi);
    yield put(fetchProductsSuccess(data.data));
  } catch (e) {
    yield put(fetchProductsFail(e));
  }
}

const rootProductsSaga = [takeEvery(FETCH_PRODUCTS_REQUEST, fetchProducts)];

export default rootProductsSaga;
