import { Fragment } from "react";

import "./module.seasons-select.css";
import { motion } from "framer-motion";

const SeasonsSelect = () => {
  return (
    <Fragment>
      <motion.div
        className="div--selects"
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
      >
        <h3>
          <img src="assets/img/svg/pages/medal.svg" alt="medal-img" />
          Leadboard
        </h3>
        <div>
          <select name="pets" id="pet-select">
            <option value="">Season 1</option>
            <option value="Season 2">Season 2</option>
            <option value="Season 3">Season 3</option>
            <option value="Season 4">Season 4</option>
            <option value="Season 5">Season 5</option>
            <option value="Season 6">Season 6</option>
            <option value="Season 7">Season 7</option>
          </select>
        </div>
      </motion.div>
    </Fragment>
  );
};

export default SeasonsSelect;
