import { Fragment } from "react";
import "./module.mods-grid.css";

import { motion } from "framer-motion";

import { Awp, Retake, Bhop, Hns, Dm, Comp } from "./mods/index";

const gamemods = [
  {
    id: 1,
    mod: <Awp />,
  },
  {
    id: 2,
    mod: <Retake />,
  },
  {
    id: 3,
    mod: <Bhop />,
  },
  {
    id: 4,
    mod: <Hns />,
  },
  {
    id: 5,
    mod: <Dm />,
  },
  {
    id: 6,
    mod: <Comp />,
  },
];

const ModsGrid = () => {
  return (
    <Fragment>
      <div className="twoCol__stickyWrap twoCol__stickyWrap--xs hideOnSingleColumn">
        <div
          className="threeColumnPage__column threeColumnPage__middleCol lbPage__middleCol lbPage__games"
          style={{
            backgroundImage: "url(assets/img/background/lb-bg.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "1000px",
          }}
        >
          <div
            className="ideas-row ideas-row-start gameCoverDisplay"
            style={{ margin: "-15px -10px 15px" }}
          >
            {gamemods.map((id, mod, index) => (
              <motion.div
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
                  delay: index * 0.07,
                }}
                className="col-md-12 col-lg-6 px-lg-4"
                style={{
                  transition: "opacity 400ms ease 0s, transform 400ms ease 0s",
                }}
              >
                {mod}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ModsGrid;
