import React, { Fragment } from "react";
import "./Shop.css";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

import DotsSvg from "./Svg/DotsSvg";

import { ReactComponent as BlueTick } from "./Svg/blue-tick.svg";
import { ReactComponent as OrangeTick } from "./Svg/orange-tick.svg";
import { ReactComponent as GrayTick } from "./Svg/gray-tick.svg";

const activatedColor = { color: "#fff" };
const disabledColor = { color: "#838C98" };

const plans = [
  {
    id: "starter",
    title: "Premium",
    icon: "assets/img/svg/prem/premium-header.svg",
    color: "#212533",
    description:
      "Custom Message for Premium Package which you can edit from the admin panel.",
    price: {
      value: 2.99,
      currency: "€",
      per: "month",
    },
    tick: <OrangeTick />,
    bgClass: "bg-premium btn text-uppercase text-white bold",
    features: {
      skinchanger: true,
      reservdslot: true,
      noads: true,
      premtag: true,
      awpimmun: true,
      dropskins: false,
      missions: false,
      streamers: false,
      xpmutlip: false,
      support: false,
      nickchange: false,
    },
  },
  {
    id: "hot",
    title: "Diamond",
    icon: "assets/img/svg/prem/diamond-header.svg",
    color: "#212533",
    description:
      "Custom Message for Diamond Package which you can edit from the admin panel.",
    price: {
      value: 4.99,
      currency: "€",
      per: "month",
    },
    tick: <BlueTick />,
    bgClass: "bg-diamond btn text-uppercase text-white bold",
    features: {
      skinchanger: true,
      reservdslot: true,
      noads: true,
      premtag: true,
      awpimmun: true,
      dropskins: true,
      missions: true,
      streamers: true,
      xpmutlip: true,
      support: true,
      nickchange: true,
    },
  },
];

const Shop = () => (
  <Fragment>
    <Helmet>
      <title>Ideas - Premium</title>
    </Helmet>
    <div className="wrap">
      <div id="routerpages">
        <div className="premium-page">
          <div className="premium__first-screen">
            <h1 className="premium__title">
              IDEAS <span>subscription</span>
            </h1>
            <p className="premium__sub-title">
              Pro Packages. Choose the Plan That's Right for You.
            </p>
            <div className="premium__main-plans">
              {plans.map(
                (
                  { id, icon, color, title, price, features, tick, bgClass },
                  i
                ) => (
                  <motion.div
                    key={id}
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
                      delay: i * 0.07,
                    }}
                    className="col-md-12 col-lg-6 px-lg-4"
                    style={{
                      transition:
                        "opacity 400ms ease 0s, transform 400ms ease 0s",
                    }}
                  >
                    <div
                      className="content shadow-none mt-5 position-relative pro_plan"
                      style={{
                        color,
                        padding: "10px",
                      }}
                    >
                      <div className="position-relative pro_plan_head">
                        <img src={icon} alt={title} />
                      </div>
                      <div className="position-relative valign pro_plan_price">
                        <h3>
                          {" "}
                          {price.value}
                          {price.currency}{" "}
                        </h3>
                        &nbsp;&nbsp;
                        <span className="bold">{price.per}</span>
                      </div>
                      <div className="pro_plan_info">
                        <div
                          className="mb--shop"
                          style={
                            features.skinchanger
                              ? activatedColor
                              : disabledColor
                          }
                        >
                          {features.skinchanger ? tick : <GrayTick />}
                          &nbsp;&nbsp;SKINCHANGER
                        </div>
                        <div
                          className="mb--shop"
                          style={
                            features.reservdslot
                              ? activatedColor
                              : disabledColor
                          }
                        >
                          {features.reservdslot ? tick : <GrayTick />}
                          &nbsp;&nbsp;Reserve slot
                        </div>
                        <div
                          className="mb--shop"
                          style={
                            features.noads ? activatedColor : disabledColor
                          }
                        >
                          {features.noads ? tick : <GrayTick />}
                          &nbsp;&nbsp;No ads
                        </div>
                        <div
                          className="mb--shop"
                          style={
                            features.premtag ? activatedColor : disabledColor
                          }
                        >
                          {features.premtag ? tick : <GrayTick />}
                          &nbsp;&nbsp;PREMIUM tag
                        </div>
                        <div
                          className="mb--shop"
                          style={
                            features.awpimmun ? activatedColor : disabledColor
                          }
                        >
                          {features.awpimmun ? tick : <GrayTick />}
                          &nbsp;&nbsp;Immunity to AWP restriction
                        </div>
                        <div
                          className="mb--shop"
                          style={
                            features.dropskins ? activatedColor : disabledColor
                          }
                        >
                          {features.dropskins ? tick : <GrayTick />}
                          &nbsp;&nbsp;Drop skins
                        </div>
                        <div
                          className="mb--shop"
                          style={
                            features.missions ? activatedColor : disabledColor
                          }
                        >
                          {features.missions ? tick : <GrayTick />}
                          &nbsp;&nbsp;Missions
                        </div>
                        <div
                          className="mb--shop"
                          style={
                            features.streamers ? activatedColor : disabledColor
                          }
                        >
                          {features.streamers ? tick : <GrayTick />}
                          &nbsp;&nbsp;Games with streamers and PRO-players
                        </div>
                        <div
                          className="mb--shop"
                          style={
                            features.xpmutlip ? activatedColor : disabledColor
                          }
                        >
                          {features.xpmutlip ? tick : <GrayTick />}
                          &nbsp;&nbsp;Experience multiplier
                        </div>
                        <div
                          className="mb--shop"
                          style={
                            features.support ? activatedColor : disabledColor
                          }
                        >
                          {features.support ? tick : <GrayTick />}
                          &nbsp;&nbsp;Priority support
                        </div>
                        <div
                          className="mb--shop"
                          style={
                            features.nickchange ? activatedColor : disabledColor
                          }
                        >
                          {features.nickchange ? tick : <GrayTick />}
                          &nbsp;&nbsp;Nickname change every 3 months
                        </div>
                      </div>
                      <div
                        className="position-relative mt40 pro_plan_foot"
                        style={{ padding: "0px 30px 30px", cursor: "pointer" }}
                      >
                        <button
                          className={bgClass}
                          style={{ cursor: "pointer" }}
                        >
                          Subscribe
                        </button>
                      </div>
                      <DotsSvg />
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default Shop;
