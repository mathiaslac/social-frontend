import React, { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { useParams } from "react-router-dom";
import SteamID from "steamid";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import {
  Clutchs,
  Countrys,
  Friends,
  Hits,
  Maps,
  Stats,
  TrustFactors,
  Uks,
  Weapons,
} from "./components";

import axios from "axios";

import "./module.profile.css";

const STEAM_API_KEY = "580D83F70BA4F7FDD1007607561AFDFB";

const Profiles = () => {
  const params = useParams();
  const [stats, setStats] = useState([]);
  const [avatar, setAvatar] = useState([]);
  const getAvatar = () => {
    axios
      .get(`http://localhost:5000/api/avatar/${params.playerId}`)
      .then((response) => {
        const avatar = response.data;
        setAvatar(avatar);
      });
  };

  const steamShort = (playerId) => {
    let steamclass = new SteamID(playerId);
    return steamclass.getSteam2RenderedID();
  };

  const playerID = steamShort(params.playerId).substring(10);

  const getStats = () => {
    axios
      .get(`http://localhost:5000/api/servers/awp/player/${playerID}`)
      .then((response) => {
        const stats = response.data[0];
        setStats(stats);
      });
  };
  useEffect(() => getStats(), []);
  useEffect(() => getAvatar(), []);
  return (
    <Fragment>
      <Helmet>
        <title>Ideas - Profiles</title>
      </Helmet>
      <a
        href={`https://steamcommunity.com/profiles/${params.playerId}/`}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={avatar}
          alt="player-avatar"
          width={100}
          height={100}
          style={{ borderRadius: "50%" }}
        />
      </a>

      <Tabs>
        <TabList className="stats__tabs">
          <Tab className="tab">Satistiques</Tab>
          <Tab className="tab">Clutchs</Tab>
          <Tab className="tab">Hits</Tab>
          <Tab className="tab">Maps</Tab>
          <Tab className="tab">Uks</Tab>
          <Tab className="tab">Weapons</Tab>
          <Tab className="tab">Coutry</Tab>
          <Tab className="tab">Friends</Tab>
          <Tab className="tab">Trust Factor</Tab>
        </TabList>

        <TabPanel id="stats">
          <Stats />
        </TabPanel>
        <TabPanel id="clutchs">
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel id="hits">
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel id="maps">
          <h2>Any content 4</h2>
        </TabPanel>
        <TabPanel id="uks">
          <h2>Any content 5</h2>
        </TabPanel>
        <TabPanel id="weapons">
          <h2>Any content 6</h2>
        </TabPanel>
        <TabPanel id="country">
          <h2>Any content 7</h2>
        </TabPanel>
        <TabPanel id="friends">
          <h2>Any content 8</h2>
        </TabPanel>
        <TabPanel id="trust-factor">
          <h2>Any content 9</h2>
        </TabPanel>
      </Tabs>
      <div>
        <h1>Faceit</h1>
        <p>Nickname :</p>
      </div>
    </Fragment>
  );
};

export default Profiles;
