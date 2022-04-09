import StoreButton from "../store-button/store-button";
import './modal.css';

const Modal = (props) => {
    if (!props.open) {
        return null;
    }
    return (
        <div className="modal-wrapper">
            <div className="modal-content">
                <h3>Details</h3>
                <p className="modal-body">{[props.detail]}</p>
                <StoreButton text={'Close'} backgroundColor={"#E74C3C"} onClick={props.onCloseClick}/>
            </div>
        </div>
    )
}

export default Modal;