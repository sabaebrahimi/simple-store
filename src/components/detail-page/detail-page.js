import React from "react";
import StoreButton from "../store-button/store-button";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Modal from "../modal/modal";
import store from "../../reducers/index";
import { returnProducts } from "../../actions/products-list-action";
import "./details-page.css";

export default class DetailPage extends React.Component {
  state = {
    showModal: false,
    product: {},
  };

  componentDidMount() {
    store.dispatch(returnProducts);

    const productId = this.props.match.params.id;
    const allProducts = store.getState().products.list;

    this.setState({
      product: allProducts.find((element) => element.id == productId),
    });
  }

  render() {
    return (
      <div className="details-wrapper">
        <section>
          <img src={this.state.product.img} />
        </section>
        <section className="text-section">
          <h1>{this.state.product.title}</h1>
          <p>R$ {this.state.product.price}</p>
          <div className="buy-now">
            <StoreButton
              text={"Buy Now"}
              icon={faShoppingCart}
              backgroundColor={"#27AE60"}
              height={40}
            />
          </div>
          <StoreButton
            text={"More Info"}
            backgroundColor={"#2D9CDB"}
            onClick={() => this.setState({ showModal: true })}
            height={40}
          />
          <Modal
            show={this.state.showModal}
            onCloseClick={() => this.setState({ showModal: false })}
          />
        </section>
      </div>
    );
  }
}
