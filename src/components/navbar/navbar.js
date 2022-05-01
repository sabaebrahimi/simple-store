import React from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import StoreButton from "../store-button/store-button";
import "./navbar.css";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
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
              />
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
