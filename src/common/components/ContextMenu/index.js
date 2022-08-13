import { motion } from "framer-motion";
import useContextMenu from "../../hooks/use-context-menu";

import "./module.context-menu.css";

const Refresh = () => {
  window.location.reload();
};

const FullScreen = () => {
  var doc = window.document;
  var docEl = doc.documentElement;

  var requestFullScreen =
    docEl.requestFullscreen ||
    docEl.mozRequestFullScreen ||
    docEl.webkitRequestFullScreen ||
    docEl.msRequestFullscreen;
  var cancelFullScreen =
    doc.exitFullscreen ||
    doc.mozCancelFullScreen ||
    doc.webkitExitFullscreen ||
    doc.msExitFullscreen;

  if (
    !doc.fullscreenElement &&
    !doc.mozFullScreenElement &&
    !doc.webkitFullscreenElement &&
    !doc.msFullscreenElement
  ) {
    requestFullScreen.call(docEl);
  } else {
    cancelFullScreen.call(doc);
  }
};

const Print = () => {
  window.print();
};

const Back = () => {
  window.history.back();
};
const Next = () => {
  window.history.forward();
};

const ContextMenu = () => {
  const { anchorPoint, show } = useContextMenu();

  if (show) {
    return (
      <motion.ul
        className="menu"
        initial={{
          opacity: 0,
          transform: "translateX(-25px)",
        }}
        animate={{
          opacity: 1,
          transform: "translateX(0px)",
        }}
        transition={{
          duration: 0.01,
        }}
        style={{
          top: anchorPoint.y,
          left: anchorPoint.x,
          transition: "opacity 400ms ease 0s, transform 400ms ease 0s",
        }}
      >
        <li onClick={Back} className="menu__item">
          <img
            src="assets/img/svg/menu/back.svg"
            alt="menu-icon"
            className="menu__icon"
          />
          Back
        </li>
        <li onClick={Next} className="menu__item">
          <img
            src="assets/img/svg/menu/next.svg"
            alt="menu-icon"
            className="menu__icon"
          />
          Next
        </li>
        <li onClick={Print} className="menu__item">
          <img
            src="assets/img/svg/menu/print.svg"
            alt="menu-icon"
            className="menu__icon"
          />
          Download
        </li>
        <div className="divider-hr"></div>
        <li onClick={Refresh} className="menu__item">
          <img
            src="assets/img/svg/menu/refresh.svg"
            alt="menu-icon"
            className="menu__icon"
          />
          Refresh
        </li>
        <li onClick={FullScreen} className="menu__item">
          <img
            src="assets/img/svg/menu/fullscreen.svg"
            alt="menu-icon"
            className="menu__icon"
          />
          Full Screen
        </li>
      </motion.ul>
    );
  }
  return <></>;
};

export default ContextMenu;
