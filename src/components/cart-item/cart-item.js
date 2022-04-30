import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./cart-item.css";

const CartItem = (props) => (
    <div className="cart-item-wrapper">
        <p>{props.title}</p>
        <p>R$ {props.price}</p>
        <span className="close-button-container"><FontAwesomeIcon icon={faClose} /></span>
    </div>
);

export default CartItem;