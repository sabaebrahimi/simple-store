import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./store-button.css";

const StoreButton = (props) => (
  <div style={{position: 'relative'}}>
  <button
    onClick={props.onClick}
    style={{
      backgroundColor: props.backgroundColor,
      color: props.color ? props.color : "white",
      width: props.width ?? "100%",
      height: props.height ?? "100%"
    }}
    className={`${props.className} store-button`}
  >
    {props.text}
    {props.icon && <FontAwesomeIcon className="icon-style" icon={props.icon} />}
  </button>
  {props.number ? <span className="number-circle">{props.number}</span> : null}
  </div>
);

export default StoreButton;
