import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./cart-popup.css";

const CartPopup = (props) => {
    if (!props.show) {
        return null;
    }
    return (
    <div style={{background: props.background}} className="cart-popup-wrapper">
        <span onClick={props.onCloseClick}><FontAwesomeIcon style={{color: props.color}} icon={faClose} /></span>
        <p style={{color: props.color}}>{props.text}</p>
    </div>
    );
};

export default CartPopup;