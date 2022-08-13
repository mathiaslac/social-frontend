import React from "react";
import { motion } from "framer-motion";

import "../Feed.css";

import PremiumCard from "./PremiumCard";

const PremiumFeed = () => {
  return (
    <motion.div
      className="card"
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
      <h3 className="card__title premium">Premium</h3>
      <div className="sub__card">
        <PremiumCard />
      </div>
    </motion.div>
  );
};

export default PremiumFeed;
