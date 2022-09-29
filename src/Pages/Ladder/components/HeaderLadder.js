import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import "./module.header-ladder.css";

const HeaderLadder = () => {
  const title = useLocation();
  return (
    <Fragment>
      <div className="header-ladder">
        <h1 className="h1-header uppercase">
          <img src="../assets/img/svg/pages/cup.svg" alt="cup-img" />
          {title.pathname[12]}
          {title.pathname[13]}
          {title.pathname[14]}
          {title.pathname[15]}
          {title.pathname[16]}
          {title.pathname[17]} LEADERS
        </h1>
        <p className="p-header">
          Compete with players, earn points to enter the TOP! The monthly
          leaderboard is updated on the 1st of each month.
        </p>
        <div className="buttons-div">
          <button className="btn-gold">
            <img src="../assets/img/svg/pages/info.svg" alt="info-img" />
            How to earn points?
          </button>
          <button className="btn-gold ml">
            <img src="../assets/img/svg/pages/faq.svg" alt="faq-img" />
            How the leaderboard works
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default HeaderLadder;
