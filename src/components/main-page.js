import React from "react";
import ProductList from "./product-list";
import Navbar from "./navbar";

export default class MainPage extends React.Component {
  

  render() {
    return <div>
        <Navbar />
        <ProductList />
    </div>;
  }
}
