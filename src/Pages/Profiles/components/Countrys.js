import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SteamID from "steamid";

const Countrys = () => {
  const params = useParams();

  const [countrys, setCountrys] = useState([]);

  const steamShort = (playerId) => {
    let steamclass = new SteamID(playerId);
    return steamclass.getSteam2RenderedID();
  };

  const playerID = steamShort(params.playerId).substring(10);

  const getCountrys = () => {
    axios
      .get(`http://localhost:5000/api/servers/awp/geoip/${playerID}`)
      .then((response) => {
        const countrys = response.data[0];
        setCountrys(countrys);
        console.log(countrys);
      });
  };

  useEffect(() => getCountrys(), []);
  return <div>Countrys</div>;
};

export default Countrys;
