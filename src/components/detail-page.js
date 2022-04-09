import React from "react";
import StoreButton from "./store-button/store-button";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Modal from "./modal/modal";

export default class DetailPage extends React.Component {
  state = {
    showModal: false,
  };

  render() {
    return (
      <div>
        <section>
          <img src={this.props.img} />
        </section>
        <section>
          <h1>{this.props.title}</h1>
          <p>R$ {this.props.price}</p>
          <StoreButton
            text={"Buy Now"}
            icon={faShoppingCart}
            backgroundColor={"#27AE60"}
          />
          <StoreButton
            text={"More Info"}
            backgroundColor={"2D9CDB"}
            onClick={() => this.setState({ showModal: true })}
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
