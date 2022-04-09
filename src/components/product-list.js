import React from "react";
import ProductCard from "./product-card";
import productData from '../data.json';


export default class ProductList extends React.Component {
  state = {
    productList: [],
  };

  componentDidMount() {
    this.setState({ productList: productData.data });

  }

  render() {
    return (
      <div>
        {this.state.productList.map((product) => (
          <ProductCard
            key={product.id}
            img={product.img}
            title={product.title}
            price={product.price}
            size={product.size}
          />
        ))}
      </div>
    );
  }
}
