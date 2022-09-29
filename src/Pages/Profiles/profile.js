import React, { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "./Profile.css";

import { axios } from "axios";

const Profiles = () => {
  const [faceit, setFaceit] = useState([]);
  const getFaceit = () => {
    fetch(
      "https://open.faceit.com/data/v4/players?game=csgo&game_player_id=76561198184313278",
      {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer e5513994-8dde-45a1-a10b-778a8f3c9a62",
        },
        method: "GET",
        game: "csgo",
      }
    ).then((response) => {
      console.log(response);
      const faceit = response;
      setFaceit(faceit);
    });
  };
  useEffect(() => getFaceit(), []);
  return (
    <Fragment>
      <Helmet>
        <title>Ideas - Snooze</title>
      </Helmet>
      <Tabs>
        <TabList className="stats__tabs">
          <Tab className="tab">Satistiques</Tab>
          <Tab className="tab">Friends</Tab>
          <Tab className="tab">Title 3</Tab>
          <Tab className="tab">Title 4</Tab>
          <Tab className="tab">Title 5</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 5</h2>
        </TabPanel>
      </Tabs>
      <div>
        <h1>Faceit</h1>
        <p>Nickname : {faceit.nickname}</p>
      </div>
    </Fragment>
  );
};

export default Profiles;
