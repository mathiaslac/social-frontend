import React, { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { useParams } from "react-router-dom";
import SteamID from "steamid";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import axios from "axios";

import "./module.profile.css";

const Profiles = () => {
  const params = useParams();
  const [faceit, setFaceit] = useState([]);

  const [stats, setStats] = useState([]);

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
      console.log(response.url);
      const faceit = response;
      setFaceit(faceit);
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
        console.log(stats);
      });
  };

  console.log(playerID);
  useEffect(() => getFaceit(), []);
  useEffect(() => getStats(), []);
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
          <div>
            <div>
              <p>Name : {stats.name}</p>
              <p>Points : {stats.value}</p>
              <p>
                Rank :{" "}
                <img
                  src={`../assets/img/ranks/${stats.rank}.svg`}
                  alt=""
                  width={20}
                  height={20}
                />
              </p>
              <p>Kills : {stats.kills}</p>
              <p>Deaths : {stats.deaths}</p>
              <p>Headshots : {stats.headshots}</p>
              <p>Assists : {stats.assists}</p>
              <p>Playtime : {new Date().toTimeString(stats.playtime)}</p>
              <p>Last seen : {new Date().toDateString(stats.lastconnect)}</p>
            </div>
          </div>
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
