import { applyMiddleware, combineReducers } from "redux";
import productsReducer from "./products-reducer";
import { createStore } from "redux";
import cartReducer from "./cart-reducer";
import thunk from 'redux-thunk'; 

const initialStates = {
  products: { list: [] },
};

const allReducers = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
});

const store = createStore(
  allReducers,
  initialStates,
  applyMiddleware(thunk)
);
export default store;
