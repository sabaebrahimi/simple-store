import React from "react";
import { returnCartItems } from "../../actions/cart-action";
import store from "../../reducers/index";
import CartItem from "../cart-item/cart-item";
import StoreButton from "../store-button/store-button";
import { removeAllItems } from "../../actions/cart-action";
import "./shopping-cart.css";

export default class ShoppingCart extends React.Component {
  state = {
    cartItems: [],
    totalPrice: 0,
  };

  calculateTotalPrice(items) {
    let total = 0;
    items.forEach((element) => {
      total += element.price;
    });
    return total;
  }

  componentDidMount() {
    store.dispatch(returnCartItems);
    this.setState({
      cartItems: store.getState().cartItems,
      totalPrice: this.calculateTotalPrice(store.getState().cartItems),
    });
    store.subscribe(() => {
      this.setState({
        cartItems: store.getState().cartItems,
        totalPrice: this.calculateTotalPrice(store.getState().cartItems),
      });
    });
  }

  onRemoveIconClickHandler = (productItemId) => {
    store.dispatch({ type: "REMOVE_CART_ITEM", cartItemId: productItemId });
  };

  onCheckoutClickHandler = () => {
    store.dispatch(removeAllItems);
  };

  render() {
    return (
      <div className="shopping-cart-wrapper">
        {this.state.cartItems.length > 0 ? (
          this.state.cartItems.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              title={cartItem.title}
              price={cartItem.price}
              id={cartItem.id}
              onClick={() => this.onRemoveIconClickHandler(cartItem.id)}
            />
          ))
        ) : (
          <p className="no-item">No Cart Item</p>
        )}

        <p className="total-text">Total: R$ {this.state.totalPrice}</p>

        <StoreButton
          text={"Checkout"}
          backgroundColor={"#2D9CDB"}
          height={40}
          width={100}
          onClick={() => this.onCheckoutClickHandler()}
        />
      </div>
    );
  }
}
