import { Fragment } from "react";
import "./module.mods-grid.css";

import { Awp, Retake, Bhop, Hns, Dm, Comp } from "./mods/index";

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
            <Awp />
            <Retake />
            <Bhop />
            <Hns />
            <Dm />
            <Comp />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ModsGrid;
