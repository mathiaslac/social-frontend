import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import "./module.header-events.css";

const HeaderEvents = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <div className="game-lobbies_page__header__6AFcN">
        <div className="game-lobbies_banner__ey2ZJ game-lobbies_unselectable__28lUK">
          <img
            className="game-lobbies_banner__img__ZrJZu"
            src="assets/img/background/banner-leads.png"
            alt="banner"
          />
          <div className="game-lobbies_banner__textArea__3PnMB">
            <div className="game-lobbies_banner__textArea__titleRow__30eNe">
              <h1 className="game-lobbies_banner__text__h1__37RuS game-lobbies_font__size__h1__1nFs5 game-lobbies_font__weight__bold__WJF_V">
                {t("events-headerTitle")}
              </h1>
              <div className="game-lobbies_banner__textArea__betaBox__2_VSl">
                <h2 className="game-lobbies_banner__text__h2__2F138 game-lobbies_font__size__h8__1dYOr game-lobbies_font__weight__bold__WJF_V">
                  CSGO
                </h2>
              </div>
            </div>
            <h3 className="game-lobbies_banner__text__h3__THu1F game-lobbies_font__size__h6__1P4Iz game-lobbies_font__weight__semiBold__181Nd">
              {t("events-headerSubTitle")}
            </h3>
          </div>
          <img
            className="game-lobbies_banner__overlay__1LmJc"
            src="assets/img/background/hero.png"
            alt="banner-overlay"
            style={{ right: "0px" }}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default HeaderEvents;
