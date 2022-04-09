import React from "react";
import ProductList from "../product-list/product-list";
import Navbar from "../navbar/navbar";
import "./main-page.css";

export default class MainPage extends React.Component {
  

  render() {
    return <div className="main-page-wrapper">
        <Navbar />
        <ProductList />
    </div>;
  }
}
