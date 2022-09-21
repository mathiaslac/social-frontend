import { Fragment } from "react";
import "./Landing.css";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import usePing from "../../common/hooks/use-ping";

const Landing = () => {
  const { t } = useTranslation();
  // const [awpPing, retakePing, bhopPing, hnsPing, dmPing, compPing] = usePing([
  //   "37.187.221.140:27015",
  //   "37.187.221.141:27015",
  //   "141.95.134.28:27015",
  //   "37.187.221.138:27015",
  //   "46.105.220.236:27015",
  //   "54.36.34.185:27015",
  // ]);
  return (
    <Fragment>
      <Helmet>
        <title>Ideas</title>
      </Helmet>
      <div className="shop">
        <div className="card" style={{ marginTop: "100px" }}>
          <h1>{t("landing-hello")}</h1>
          <h1>{t("landing-how are you?")}</h1>
        </div>
        {/* <div className="card">
          <p>AWP Ping: {Math.floor(awpPing)} ms</p>
          <p>RETAKE Ping: {Math.floor(retakePing)} ms</p>
          <p>BHOP Ping: {Math.floor(bhopPing)} ms</p>
          <p>HNS Ping: {Math.floor(hnsPing)} ms</p>
          <p>DM Ping: {Math.floor(dmPing)} ms</p>
          <p>COMP Ping: {Math.floor(compPing)} ms</p>
        </div> */}
      </div>
    </Fragment>
  );
};

export default Landing;
