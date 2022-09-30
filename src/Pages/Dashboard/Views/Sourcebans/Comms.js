import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import SkeletonSb from "../../../../Skeleton/Dashboard/Skeleton-sb";

import "../../../../components/posts/RegularPost/module.posts.css";
import "../../../Ladder/components/module.top.css";
import "./module.dash-sb.css";

const SbComms = () => {
  const [comms, setComms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getComms = () => {
    axios.get("http://localhost:5000/api/comms").then((response) => {
      const comms = response.data;
      setComms(comms);
      setIsLoading(false);
    });
  };

  useEffect(() => getComms(), []);

  return (
    <Fragment>
      <nav className="dash-sb-nav">
        <Link className="dash-sb-nav-link" to="/dashboard/sourcebans/bans">
          Bans
        </Link>
        <Link
          className="dash-sb-nav-link sb-link-active"
          to="/dashboard/sourcebans/comms"
        >
          Comms
        </Link>
        <Link className="dash-sb-nav-link" to="/dashboard/sourcebans/admins">
          Admins
        </Link>
      </nav>
      <div className="header__table-top-bans">
        <span>Player</span>
        <span className="center">Date</span>
        <span className="center">Reason</span>
        <span className="center">Length</span>
        <span className="center">Progress</span>
      </div>
      <div className="top__table-bans">
        <table>
          <tbody className="grey-scroll shadow--top">
            {isLoading && <SkeletonSb cards={10} />}
            {comms &&
              comms.map((comm, index) => (
                <motion.tr
                  key={comm.bid}
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
                  className="sub__card-top flex-card bg--dark-bans"
                  style={{
                    transition:
                      "opacity 400ms ease 0s, transform 400ms ease 0s",
                  }}
                >
                  <td className="user-fix">
                    <a href={`profile/${comm.authid}`}>
                      <span className="limited-length">{comm.name}</span>
                    </a>
                  </td>
                  <td className="center">
                    {new Date(comm.created * 1000).toDateString()}
                  </td>
                  <td className="center">{comm.reason}</td>
                  <td className="center">
                    {new Date(comm.length * 1000)
                      .toISOString()
                      .substring(11, 19)}
                  </td>
                  <td className="center">
                    <div
                      className="progress__bans"
                      style={{
                        background: "#fff",
                        height: 5,
                        width: `${(comm.created * 100) / comm.ends}%`,
                      }}
                    ></div>
                  </td>
                </motion.tr>
              ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default SbComms;
