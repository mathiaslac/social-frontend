import "../Feed.css";
import React from "react";
import { Link } from "react-router-dom";

const PremiumCard = () => {
  return (
    <div className="sugg__friends">
      <div className="infos__friends">
        <p className="nick">
          Upgrade to <span className="premium">Premium</span>
        </p>
      </div>
      <div className="infos__friends">
        <Link className="upgrade__btn" to="/premium">
          Upgrade
        </Link>
      </div>
    </div>
  );
};

export default PremiumCard;
