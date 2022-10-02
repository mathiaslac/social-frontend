import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SteamID from "steamid";

const Clutchs = () => {
  const params = useParams();

  const [clutchs, setClutchs] = useState([]);

  const steamShort = (playerId) => {
    let steamclass = new SteamID(playerId);
    return steamclass.getSteam2RenderedID();
  };

  const playerID = steamShort(params.playerId).substring(10);

  const getClutchs = () => {
    axios
      .get(`http://localhost:5000/api/servers/awp/clutch/${playerID}`)
      .then((response) => {
        const clutchs = response.data[0];
        setClutchs(clutchs);
        console.log(clutchs);
      });
  };

  useEffect(() => getClutchs(), []);
  return <div>Clutchs</div>;
};

export default Clutchs;
