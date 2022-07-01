import { all } from "redux-saga/effects";
import rootCartSaga from "./cart/saga";
import rootProductsShopSaga from "./product-shop/saga";
import rootProductsSaga from "./product/saga";
import rootUserSaga from "./user/saga";

export default function* rootSaga() {
  yield all([
    ...rootUserSaga,
    ...rootProductsSaga,
    ...rootCartSaga,
    ...rootProductsShopSaga,
  ]);
}
