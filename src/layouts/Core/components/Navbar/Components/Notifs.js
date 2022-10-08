import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NoNotificationsSvg from "../Svg/NoNotificationsSvg";

window.onload = function () {};

const dropPush = () => {
  document.getElementById("Dropdown-Push").classList.toggle("show");
};

window.onclick = function (event) {
  if (!event.target.matches(".dropPush")) {
    var dropdowns = document.getElementsByClassName("dropdown-push-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
const Notifs = () => {
  return (
    <div
      onClick={dropPush}
      style={{ marginTop: -18, marginRight: -20, marginLeft: 15 }}
    >
      <div className="dropPush ideasBadge ideas-badge ideas-dropdown-trigger notification__badge notif pointer">
        <div
          className="notification-count"
          style={{
            animationName: "antZoomBadgeIn",
          }}
        >
          <span>3</span>
          <img
            src="assets/img/svg/navbar/Notifs.svg"
            alt="notifs-svg"
            style={{ marginTop: 20, marginLeft: -21 }}
          />
          <img
            src="assets/img/svg/navbar/NotifsCountBack.svg"
            alt="notifsback-svg"
            width={25}
            height={23}
            style={{ marginLeft: -19 }}
          />
        </div>
      </div>
      <div
        id="Dropdown-Push"
        className="dropdown-friends-content notifs__spacing dropdown-menu dropdown-menu-right dropdown-widget js_dropdown-keepopen scroll"
      >
        <motion.div
          initial={{
            opacity: 0,
            transform: "translateY(20px)",
          }}
          animate={{
            opacity: 1,
            transform: "translateY(0px)",
          }}
          transition={{
            duration: 0.07,
          }}
          style={{
            transition: "opacity 400ms ease 0s, transform 400ms ease 0s",
          }}
          className="valign dropdown-widget-header"
        >
          <span className="title">Notifications</span>
        </motion.div>
        <div className="dropdown-widget-body custom-scrollbar">
          <div className="js_scroller">
            <p className="text-center text-muted empty_state">
              <NoNotificationsSvg />
              No notifications
            </p>
          </div>
        </div>
        <p className="dropdown-widget-footer pointer">See All</p>
      </div>
    </div>
  );
};

export default Notifs;
