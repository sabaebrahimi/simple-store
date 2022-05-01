import React from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import StoreButton from "../store-button/store-button";
import "./navbar.css";
import { Link } from "react-router-dom";
import store from "../../reducers/index";
import { returnCartItems } from "../../actions/cart-action";

export default class Navbar extends React.Component {
  state = {
    cartItemNumber: 0,
  };

  componentDidMount() {
    store.dispatch(returnCartItems);
    this.setState({ cartItemNumber: store.getState().cartItems.length });

    store.subscribe(() => {
      this.setState({ cartItemNumber: store.getState().cartItems.length });
    });
  }

  render() {
    return (
      <nav className="navbar">
        <ul>
          <Link to="/?filter=none" style={{ textDecoration: "none" }}>
            <li>All Products</li>
          </Link>
          <Link to="/?filter=smartphone" style={{ textDecoration: "none" }}>
            <li>Smartphones</li>
          </Link>
          <Link to="/?filter=notebook" style={{ textDecoration: "none" }}>
            <li>Notebooks</li>
          </Link>
          <li>
            <Link to="/cart">
              <StoreButton
                text={"Cart"}
                icon={faShoppingCart}
                backgroundColor={"#2D9CDB"}
                width={100}
                height={40}
                number={
                  this.state.cartItemNumber > 0 && this.state.cartItemNumber
                }
              />
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
