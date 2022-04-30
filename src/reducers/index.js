import { combineReducers } from "redux";
import productsReducer from "./products-reducer";
import { createStore } from "redux";

const initialStates = {
  products: { list: [] },
};

const allReducers = combineReducers({
  products: productsReducer,
});

const store = createStore(
  allReducers,
  initialStates,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
