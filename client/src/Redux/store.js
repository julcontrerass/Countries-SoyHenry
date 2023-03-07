import { applyMiddleware, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
export default store;
