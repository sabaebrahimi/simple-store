import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./store-button.css";

const StoreButton = (props) => (
  <button
    onClick={props.onClick}
    style={{
      backgroundColor: props.backgroundColor,
      color: props.color ? props.color : "white",
      width: props.width ?? "100%",
      height: props.height ?? "100%"
    }}
    className="store-button"
  >
    {props.text}
    {props.icon && <FontAwesomeIcon className="icon-style" icon={props.icon} />}
  </button>
);

export default StoreButton;
