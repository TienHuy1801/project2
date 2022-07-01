import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./rootReducer";
import rootSaga from "./rootSaga";

const composeEnhancers = composeWithDevTools({});

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
sagaMiddleware.run(rootSaga);

export default store;
