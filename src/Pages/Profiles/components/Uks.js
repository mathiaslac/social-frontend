import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SteamID from "steamid";

const Uks = () => {
  const params = useParams();

  const [uks, setUks] = useState([]);

  const steamShort = (playerId) => {
    let steamclass = new SteamID(playerId);
    return steamclass.getSteam2RenderedID();
  };

  const playerID = steamShort(params.playerId).substring(10);

  const getUks = () => {
    axios
      .get(`http://localhost:5000/api/servers/awp/uk/${playerID}`)
      .then((response) => {
        const uks = response.data[0];
        setUks(uks);
        console.log(uks);
      });
  };
  useEffect(() => getUks(), []);
  return <div>Uks</div>;
};

export default Uks;
