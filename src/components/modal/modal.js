import StoreButton from "../store-button/store-button";
import "./modal.css";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal-wrapper">
      <div className="modal-content">
        <h3>Details</h3>
        <p className="modal-body">{props.details}</p>
        <div className="button-container">
          <StoreButton
            className="close-button"
            text={"Close"}
            backgroundColor={"#E74C3C"}
            onClick={props.onCloseClick}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
