import { useEffect } from "react";
import ReactDOM from "react-dom";
import "./module.modal.css";
import { CSSTransition } from "react-transition-group";

const Modal = (props) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={props.onClose}>
        <div onClick={(e) => e.stopPropagation()}>
          <img
            src="assets/img/svg/servers/close-modal.svg"
            onClick={props.onClose}
            className="modal-close pointer"
            alt="modal-close"
          />
          <div>{props.children}</div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default Modal;
