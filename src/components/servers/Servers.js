import React from "react";
import { motion } from "framer-motion";
import { useHorizontalScroll } from "../../common/hooks/use-horizontal-scroll";

import "./Servers.css";

// import { useModal } from "../../modules/modal";

const ServerOnline = [
  {
    id: "awp",
    serverName: "AWP",
    mapImg: "assets/img/maps/awp_lego_2.jpg",
  },
  {
    id: "retake",
    serverName: "RETAKE",
    mapImg: "assets/img/maps/de_mirage.webp",
  },
  {
    id: "bhop",
    serverName: "BHOP",
    mapImg: "assets/img/maps/bhop_map.jpg",
  },
  {
    id: "competitif",
    serverName: "COMPETITIVE",
    mapImg: "assets/img/maps/de_inferno.webp",
  },
  {
    id: "dm",
    serverName: "DM",
    mapImg: "assets/img/maps/de_dust2.webp",
  },
  {
    id: "hn&s",
    serverName: "HIDE & SEEK",
    mapImg: "assets/img/maps/hns_map.jpg",
  },
  {
    id: "d&m",
    serverName: "DM",
    mapImg: "assets/img/maps/de_dust2.webp",
  },
  {
    id: "hns",
    serverName: "HIDE & SEEK",
    mapImg: "assets/img/maps/hns_map.jpg",
  },
];

const Servers = () => {
  // const { triggerModal } = useModal();
  const scrollRef = useHorizontalScroll();
  return (
    <div className="container">
      <div className="servers">
        <div
          ref={scrollRef}
          id="stories"
          className="stories scroll user-icon carousel sngine"
        >
          {ServerOnline.map(({ id, serverName, mapImg }, i) => (
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
                delay: i * 0.07,
              }}
              className="active__servers"
              style={{
                transition: "opacity 400ms ease 0s, transform 400ms ease 0s",
              }}
            >
              <div>
                <img src={mapImg} alt={serverName} />
              </div>
              <p className="truncate pointer">{serverName}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servers;
