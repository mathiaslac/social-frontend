import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import SkeletonSb from "../../../../Skeleton/Dashboard/Skeleton-sb";

import "../../../../components/posts/RegularPost/module.posts.css";
import "../../../Ladder/components/module.top.css";
import "./module.dash-sb.css";

const SbAdmins = () => {
  const [admins, setAdmins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getAdmins = () => {
    axios.get("http://localhost:5000/api/admins").then((response) => {
      const admins = response.data;
      setAdmins(admins);
      setIsLoading(false);
    });
  };

  useEffect(() => getAdmins(), []);

  return (
    <Fragment>
      <nav className="dash-sb-nav">
        <Link className="dash-sb-nav-link" to="/dashboard/sourcebans/bans">
          Bans
        </Link>
        <Link className="dash-sb-nav-link" to="/dashboard/sourcebans/comms">
          Comms
        </Link>
        <Link
          className="dash-sb-nav-link sb-link-active"
          to="/dashboard/sourcebans/admins"
        >
          Admins
        </Link>
      </nav>
      <div className="header__table-top-admins">
        <span>Admin</span>
        <span className="center">Email</span>
        <span className="center">SteamID</span>
        <span className="center">Group</span>
      </div>
      <div className="top__table-admins">
        <table>
          <tbody className="grey-scroll shadow--top">
            {isLoading && <SkeletonSb cards={10} />}
            {admins &&
              admins.map((admin, index) => (
                <motion.tr
                  key={admin.aid}
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
                    <Link to={`/profile/${admin.authid}`}>
                      <span className="limited-length">{admin.user}</span>
                    </Link>
                  </td>
                  <td className="center">{admin.email}</td>
                  <td className="center">{admin.authid}</td>
                  <td className="center">{admin.srv_group}</td>
                </motion.tr>
              ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default SbAdmins;
