import React from "react";
import ProductCard from "../product-card/product-card";
import store from "../../reducers/index";
import { loadProducts } from "../../actions/products-list-action";
import "./product-list.css";
import ProductFilter from "./product-filter";
import queryString from "query-string";

export default class ProductList extends React.Component {
  state = {
    productsList: [],
    filter: ProductFilter.NONE,
    queryFilter: "",
  };

  prevQuery = queryString.parse(this.props.location.search);

  componentDidMount() {
    store.dispatch(loadProducts);
    this.setState({ productsList: store.getState().products.list });
    store.subscribe(() => {
      this.setState({ productsList: store.getState().products.list });
    });

    const query = queryString.parse(this.props.location.search);
    this.prevQuery = query;
    this.setState({ queryFilter: query.filter });
  }

  componentDidUpdate(prevProps, prevState) {
    const query = queryString.parse(this.props.location.search);

    if (query.filter !== this.prevQuery.filter) {
      this.setState({ queryFilter: query.filter });
    }

    if (prevState.queryFilter !== this.state.queryFilter) {
      switch (this.state.queryFilter) {
        case "none":
          this.setState({ filter: ProductFilter.NONE });
          break;
        case "notebook":
          this.setState({ filter: ProductFilter.NOTE_BOOK });
          break;
        case "smartphone":
          this.setState({ filter: ProductFilter.SMART_PHONE });
          break;
      }
    }
    this.prevQuery = query;
  }

  checkFilterCondition = (productType) => {
    if (this.state.filter == ProductFilter.NONE) return true;
    if (
      (productType === "notebook" &&
        this.state.filter == ProductFilter.NOTE_BOOK) ||
      (productType === "smartphone" &&
        this.state.filter == ProductFilter.SMART_PHONE)
    )
      return true;
    return false;
  };

  render() {
    return (
      <div className="product-list-wrapper">
        {this.state.productsList.length > 0 ? (
          store
            .getState()
            .products.list.map((product) =>
              this.checkFilterCondition(product.category) ? (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  img={product.img}
                  title={product.title}
                  price={product.price}
                  size={product.size}
                />
              ) : null
            )
        ) : (
          <p>No data</p>
        )}
      </div>
    );
  }
}
