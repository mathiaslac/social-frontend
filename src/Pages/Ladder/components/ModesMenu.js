import "./module.modes-menu.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import SeasonTimer from "./SeasonTimer";

const ServersModes = [
  {
    id: "awp",
    modeName: "AWP",
    img: "../assets/img/mods/AWP.webp",
    modeType: "Entertainment mode",
  },
  {
    id: "bhop",
    modeName: "BHOP",
    img: "../assets/img/mods/BHOP.jpg",
    modeType: "Entertainment mode",
  },
  {
    id: "comp",
    modeName: "COMPETITIVE",
    img: "../assets/img/mods/COMP.jpg",
    modeType: "Training Mode",
  },
  {
    id: "dm",
    modeName: "DM",
    img: "../assets/img/mods/DM.jpg",
    modeType: "Training Mode",
  },
  {
    id: "hns",
    modeName: "HIDE & SEEK",
    img: "../assets/img/mods/HNS.webp",
    modeType: "Entertainment mode",
  },
  {
    id: "retake",
    modeName: "RETAKE",
    img: "../assets/img/mods/RETAKE.webp",
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
      <div className="lbPage__games__banner">
        {ServersModes.map(({ id, modeName, img, modeType }, i) => (
          <motion.div
            key={id}
            className="ideas-col ideas-col-xs-12 ideas-col-md-12 ideas-col-lg-12"
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
            <Link to={`/leadboards/${id}`}>
              <div className="gamecover-card-container__banner clickable">
                <div
                  className="gamecover-card-img__banner"
                  style={{
                    backgroundImage: `url(${img})`,
                    backgroundPosition: "0px -63.5949px",
                    backgroundSize: "494.872px 278.118px",
                  }}
                ></div>
                <h1 className="ideas-typography gamecover-title__banner">
                  {modeName}
                </h1>
                <article
                  className="ideas-typography gamecover-playerCount__banner"
                  style={{ color: "rgb(129, 134, 155)" }}
                >
                  {modeType}
                </article>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ModesMenu;
