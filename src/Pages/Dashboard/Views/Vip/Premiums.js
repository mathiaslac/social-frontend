import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import SkeletonSb from "../../../../Skeleton/Dashboard/Skeleton-sb";

import "../../../../components/posts/RegularPost/module.posts.css";
import "../../../Ladder/components/css/module.top.css";
import "../Sourcebans/module.dash-sb.css";

const Premiums = () => {
  const navigate = useNavigate();

  const [premiums, setPremiums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getPremiums = () => {
    axios.get("http://localhost:5000/api/premiums").then((response) => {
      const premiums = response.data;
      setPremiums(premiums);
      setIsLoading(false);
    });
  };

  useEffect(() => getPremiums(), []);

  return (
    <Fragment>
      <button className="pointer" onClick={() => navigate(-1)}>
        {" "}
        → Back
      </button>
      <div className="header__table-top-premiums">
        <span>Player</span>
        <span className="center">Group</span>
        <span className="center">Expire</span>
      </div>
      <div className="top__table-premiums">
        <table>
          <tbody className="grey-scroll shadow--top">
            {isLoading && <SkeletonSb cards={10} />}
            {premiums &&
              premiums.map((premium, index) => (
                <motion.tr
                  key={index}
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
                    <Link to={`/profile/${premium.account_id}`}>
                      <span className="limited-length">{premium.name}</span>
                    </Link>
                  </td>
                  <td className="center">{premium.group}</td>
                  <td className="center">{premium.expires}</td>
                </motion.tr>
              ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Premiums;
