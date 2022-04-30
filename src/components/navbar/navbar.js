import React from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import StoreButton from "../store-button/store-button";
import "./navbar.css";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <ul>
          <li>All Products</li>
          <li>Smartphones</li>
          <li>Notebooks</li>
          <li>
            <StoreButton
              text={"Cart"}
              icon={faShoppingCart}
              backgroundColor={"#2D9CDB"}
              width={100}
              height={40}
            />
          </li>
        </ul>
      </nav>
    );
  }
}