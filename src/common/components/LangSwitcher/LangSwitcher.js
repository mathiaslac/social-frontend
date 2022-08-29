import { Fragment } from "react";

import "./module.menu-lang.css";
import { useTranslation } from "react-i18next";

const LangSwitcher = () => {
  const { i18n } = useTranslation();
  const handleChangeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <Fragment>
      <div>
        <ul>
          <li className="li-lang" onClick={() => handleChangeLang("en")}>
            <img
              className="flagSwitcher"
              src="assets/img/svg/flags/united-kingdom.svg"
              alt="UK"
            />
            <span>English</span>
          </li>
          <li className="li-lang" onClick={() => handleChangeLang("fr")}>
            <img
              className="flagSwitcher"
              src="assets/img/svg/flags/france.svg"
              alt="FR"
            />
            <span>French</span>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default LangSwitcher;
