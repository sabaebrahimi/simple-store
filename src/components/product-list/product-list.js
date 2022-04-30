import React from "react";
import ProductCard from "../product-card/product-card";
import store from "../../reducers/index";
import {loadProducts} from "../../actions/products-list-action";
import "./product-list.css";

export default class ProductList extends React.Component {
  
  state = {
    productsList: []
  };

  componentDidMount() {
    store.dispatch(loadProducts);
    this.setState({productsList: store.getState().products.list});
    store.subscribe(() => {
      this.setState({productsList: store.getState().products.list});
    })
  }

  render() {
    return (
      <div className="product-list-wrapper">
        {this.state.productsList.length > 0 ? store.getState().products.list.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            img={product.img}
            title={product.title}
            price={product.price}
            size={product.size}
          />
        )) : <p>No data</p>}
      </div>
    );
  }
}
