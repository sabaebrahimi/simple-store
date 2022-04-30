import React from "react";
import { returnCartItems } from "../../actions/cart-action";
import store from "../../reducers/index";
import CartItem from "../cart-item/cart-item";
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
  };

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
            />
          ))
        ) : (
          <p>No Cart Item</p>
        )}

        <p className="total-text">Total: R$ {this.state.totalPrice}</p>


      </div>
    );
  }
}
