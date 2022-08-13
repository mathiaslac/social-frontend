import { Fragment, useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import axios from "axios";

const Groups = () => {
  const [awpServer, setCsgoServer] = useState([]);

  const getCsgoServer = () => {
    axios
      .get(
        "http://localhost:5000/api/awp/?game=csgo&ip=37.187.221.140&port=27015"
      )
      .then((response) => {
        console.log(response.data.info);
        const csgoServers = response.data.info;
        setCsgoServer(csgoServers);
      });
  };

  useEffect(() => getCsgoServer(), []);

  return (
    <Fragment>
      <Helmet>
        <title>Ideas - Servers</title>
      </Helmet>
      <div className="shop">
        <div className="card"></div>
        {awpServer &&
          awpServer.map((awpServe, index) => (
            <div key={index}>
              <p>Server name : {awpServe.name}</p>
              <p>Map :</p>
              <p>Players : 1 / {awpServe.maxplayers}</p>
              <p>
                <a href={`steam://connect/${awpServe.connect}`}>Connect</a>
              </p>
              <p>Ping : {awpServe.ping}</p>
            </div>
          ))}
      </div>
    </Fragment>
  );
};

export default Groups;
