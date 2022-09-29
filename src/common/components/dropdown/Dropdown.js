import { useEffect } from "react";
import "./module.dropdown.css";
import { CSSTransition } from "react-transition-group";

const Dropdown = (props) => {
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

  return (
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="dropdown" onClick={props.onClose}>
        <div onClick={(e) => e.stopPropagation()}>
          <div
            className="ideas-dropdown post-creator_postCreator__2PvBy"
            style={{ width: 500 }}
          >
            {props.children}
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Dropdown;
