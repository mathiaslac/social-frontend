import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SteamID from "steamid";

const Weapons = () => {
  const params = useParams();

  const [weapons, setWeapons] = useState([]);

  const steamShort = (playerId) => {
    let steamclass = new SteamID(playerId);
    return steamclass.getSteam2RenderedID();
  };

  const playerID = steamShort(params.playerId).substring(10);

  const getWeapons = () => {
    axios
      .get(`http://localhost:5000/api/servers/awp/weapons/${playerID}`)
      .then((response) => {
        const weapons = response.data[0];
        setWeapons(weapons);
        console.log(weapons);
      });
  };

  useEffect(() => getWeapons(), []);
  return <div>Weapons</div>;
};

export default Weapons;
