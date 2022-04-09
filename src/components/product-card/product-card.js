import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import StoreButton from "../store-button/store-button"
import "./product-card.css";

const ProductCard = (props) => (
  <div className="product-card-wrapper">
    <img src={props.img} />
    <div>
      <h2>{props.title}</h2>
      <div>R$ {props.price}</div>
      <span>{props.size}</span>
    </div>
    <StoreButton
      text={"Add to cart"}
      icon={faShoppingCart}
      backgroundColor={"#27AE60"}
      width={100}
      height={50}
      onClick={props.onClick}
    />
  </div>
);

export default ProductCard;
