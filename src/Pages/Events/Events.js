import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

import "./Events.css";
import EventsSvg from "./Svg/EventsSvg";

import CalCheckSvg from "./Svg/shorts/CalCheckSvg";
import CalendarSvg from "./Svg/shorts/CalendarSvg";
import LetterSvg from "./Svg/shorts/LetterSvg";
import MyEvntSvg from "./Svg/shorts/MyEvntSvg";
import StarSvg from "./Svg/shorts/StarSvg";

const Events = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Ideas - Events</title>
      </Helmet>
      <div className="container mtb20">
        <div className="valign page_titlemulti mb15">
          <h2 className="page_title mb0">
            <EventsSvg />
            Events
          </h2>
        </div>
        <div className="valign post_filters">
          <div className="post_filters_nav not_filter valign scroll">
            <p className="btn-mat filterby pointer active">
              <CalendarSvg />
              Discover
            </p>
            <p className="btn-mat filterby pointer">
              <CalCheckSvg />
              Going
            </p>
            <p className="btn-mat filterby pointer">
              <StarSvg />
              Intersted
            </p>
            <p className="btn-mat filterby pointer">
              <LetterSvg />
              Invited
            </p>
            <p className="btn-mat filterby pointer">
              <MyEvntSvg />
              My Events
            </p>
          </div>
        </div>
        <motion.div
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
          }}
          style={{
            transition: "opacity 400ms ease 0s, transform 400ms ease 0s",
          }}
        >
          <ul className="row">
            <div className="col-md-6 col-lg-6 mb20">
              <div className="content p-2 h-100 events_list">
                <div className="img pointer">
                  <p>
                    <img src="assets/img/media1.png" alt="event_img" />
                  </p>
                  <div className="d-flex position-absolute align-items-end justify-content-between w-100 events_list_mid">
                    <div className="position-relative profle-date-wrapper">
                      <span>May</span>
                      <b>6</b>
                    </div>
                    <div className="events_list_btns">
                      <button className="btn btn-mat btn-light js_interest-event">
                        <i className="fa fa-star mr5"></i>
                        Interested
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt10 events_list_info">
                  <h2 className="truncate pointer">
                    <p className="p-w" style={{ color: "#dcdcdc" }}>
                      First CSGO Tournament
                    </p>
                  </h2>
                  <p className="mb-0">22 Interested</p>
                </div>
              </div>
            </div>
          </ul>
        </motion.div>
      </div>
    </Fragment>
  );
};

export default Events;
