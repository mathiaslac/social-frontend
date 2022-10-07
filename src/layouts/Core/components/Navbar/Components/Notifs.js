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
    <div onClick={dropPush}>
      <div className="dropPush ideasBadge ideas-badge ideas-dropdown-trigger notification__badge notif pointer">
        <svg
          className="notif__icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#81869B"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2.39999C10.0905 2.39999 8.25912 3.15856 6.90886 4.50882C5.55859 5.85909 4.80003 7.69043 4.80003 9.59999V13.9032L3.95163 14.7516C3.78385 14.9194 3.66961 15.1332 3.62332 15.366C3.57704 15.5987 3.60081 15.8399 3.69161 16.0592C3.78242 16.2784 3.93618 16.4658 4.13347 16.5977C4.33077 16.7295 4.56272 16.7999 4.80003 16.8H19.2C19.4373 16.7999 19.6693 16.7295 19.8666 16.5977C20.0639 16.4658 20.2176 16.2784 20.3084 16.0592C20.3992 15.8399 20.423 15.5987 20.3767 15.366C20.3304 15.1332 20.2162 14.9194 20.0484 14.7516L19.2 13.9032V9.59999C19.2 7.69043 18.4415 5.85909 17.0912 4.50882C15.7409 3.15856 13.9096 2.39999 12 2.39999ZM12 21.6C11.0452 21.6 10.1296 21.2207 9.45444 20.5456C8.77931 19.8704 8.40003 18.9548 8.40003 18H15.6C15.6 18.9548 15.2207 19.8704 14.5456 20.5456C13.8705 21.2207 12.9548 21.6 12 21.6Z"></path>
        </svg>
        <sup
          className="notification-count"
          style={{
            animationName: "antZoomBadgeIn",
            background: "#f71953",
            right: 3,
            marginTop: -2,
          }}
        >
          <span>3</span>
        </sup>
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
