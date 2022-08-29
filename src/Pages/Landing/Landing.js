import { Fragment } from "react";
import "./Landing.css";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const Landing = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Helmet>
        <title>Ideas</title>
      </Helmet>
      <div className="shop">
        <div className="card" style={{ marginTop: "100px" }}>
          <h1>{t("hello")}</h1>
          <h1>{t("how are you?")}</h1>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
