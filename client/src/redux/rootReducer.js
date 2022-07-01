import { combineReducers } from "redux";
import { cartReducers } from "./cart/reducer";
import { productsShopReducers } from "./product-shop/reducer";
import { productsReducers } from "./product/reducer";
import { userReducers } from "./user/reducer";

export const rootReducer = combineReducers({
  user: userReducers,
  products: productsReducers,
  cart: cartReducers,
  productsShop: productsShopReducers,
});
