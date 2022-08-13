import "./module.modes-menu.css";
import { motion } from "framer-motion";

import SeasonTimer from "./SeasonTimer";

const ServersModes = [
  {
    id: "awp",
    modeName: "AWP",
    icon: "assets/img/svg/servers/awp.svg",
    modeType: "Entertainment mode",
  },
  {
    id: "bhop",
    modeName: "BHOP",
    icon: "assets/img/svg/servers/bhop.svg",
    modeType: "Entertainment mode",
  },
  {
    id: "comp",
    modeName: "COMPETITIVE",
    icon: "assets/img/svg/servers/comp.svg",
    modeType: "Training Mode",
  },
  {
    id: "dm",
    modeName: "DM",
    icon: "assets/img/svg/servers/dm.svg",
    modeType: "Training Mode",
  },
  {
    id: "hns",
    modeName: "HIDE & SEEK",
    icon: "assets/img/svg/servers/hns.svg",
    modeType: "Entertainment mode",
  },
  {
    id: "retake",
    modeName: "RETAKE",
    icon: "assets/img/svg/servers/retake.svg",
    modeType: "Training Mode",
  },
];

const ModesMenu = () => {
  return (
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
      className="card-top"
      style={{
        transition: "opacity 400ms ease 0s, transform 400ms ease 0s",
      }}
    >
      <SeasonTimer />
      <div className="scroll__top">
        <ul className="servers-modes">
          {ServersModes.map(({ id, modeName, icon, modeType }, i) => (
            <motion.li
              key={id}
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
                delay: i * 0.07,
              }}
              style={{
                transition: "opacity 400ms ease 0s, transform 400ms ease 0s",
                marginBottom: "5px",
              }}
            >
              <div className="div-modes">
                <div className="modes-onediv">
                  <img src={icon} alt={modeName} />
                </div>
                <div>
                  <h6 className="server-name">{modeName}</h6>
                  <span className="mode-type">{modeType}</span>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ModesMenu;
