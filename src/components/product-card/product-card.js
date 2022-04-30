import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import StoreButton from "../store-button/store-button";
import { Link } from "react-router-dom";
import "./product-card.css";

const ProductCard = (props) => (
  <div className="product-card-wrapper">
    <img src={props.img} />
    <div>
      <h2>{props.title}</h2>
      <div className="details-container">
        <div>R$ {props.price}</div>
        <span>{props.size}</span>
      </div>
    </div>
    <Link to={`details/${props.id}`}>
    <StoreButton
      text={"Add to cart"}
      icon={faShoppingCart}
      backgroundColor={"#27AE60"}
      height={50}
      onClick={props.onClick}
    />
    </Link>
  </div>
);

export default ProductCard;
