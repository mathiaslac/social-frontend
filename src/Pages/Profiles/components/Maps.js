import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SteamID from "steamid";

const Maps = () => {
  const params = useParams();

  const [maps, setMaps] = useState([]);

  const steamShort = (playerId) => {
    let steamclass = new SteamID(playerId);
    return steamclass.getSteam2RenderedID();
  };

  const playerID = steamShort(params.playerId).substring(10);

  const getMaps = () => {
    axios
      .get(`http://localhost:5000/api/servers/awp/maps/${playerID}`)
      .then((response) => {
        const maps = response.data[0];
        setMaps(maps);
        console.log(maps);
      });
  };

  useEffect(() => getMaps(), []);
  return <div>Maps</div>;
};

export default Maps;
