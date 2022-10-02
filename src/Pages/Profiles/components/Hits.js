import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SteamID from "steamid";

const Hits = () => {
  const params = useParams();

  const [hits, setHits] = useState([]);

  const steamShort = (playerId) => {
    let steamclass = new SteamID(playerId);
    return steamclass.getSteam2RenderedID();
  };

  const playerID = steamShort(params.playerId).substring(10);

  const getHits = () => {
    axios
      .get(`http://localhost:5000/api/servers/awp/hits/${playerID}`)
      .then((response) => {
        const hits = response.data[0];
        setHits(hits);
        console.log(hits);
      });
  };

  useEffect(() => getHits(), []);
  return <div>Hits</div>;
};

export default Hits;
