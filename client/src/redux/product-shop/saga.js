import { call, put, takeEvery } from "@redux-saga/core/effects";
import { productsApi } from "../../../API/shop";
import { fetchProductsShopFail, fetchProductsShopSuccess } from "./action";
import { FETCH_PRODUCTS_SHOP_REQUEST } from "./type";

function* fetchProductsShop({ payload }) {
  try {
    const data = yield call(productsApi, payload.sellerId, payload.token);
    yield put(fetchProductsShopSuccess(data.data));
  } catch (e) {
    yield put(fetchProductsShopFail(e));
  }
}

const rootProductsShopSaga = [
  takeEvery(FETCH_PRODUCTS_SHOP_REQUEST, fetchProductsShop),
];

export default rootProductsShopSaga;
