import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SteamID from "steamid";

/**
 * @param method {string}
 * @param url {string}
 * @param triggerOnMount {boolean}
 * @param transformer {Function}
 */
const useAxios = (
  method = "get",
  url = "",
  triggerOnMount = true,
  transformer = (rawData) => rawData
) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | pending | success | error
  const memoizedTransformer = useRef(transformer);

  const getData = useCallback(async () => {
    try {
      setStatus("pending");
      let res = null;
      switch (method) {
        case "get": {
          res = await axios.get(url);
          break;
        }
        case "post": {
          res = await axios.post(url);
          break;
        }
        default:
      }
      const data = memoizedTransformer.current(res.data);
      setData(data);
      setStatus("success");
    } catch (err) {
      console.log({ err });
      setStatus("error");
    }
  }, [url, method]);

  useEffect(() => {
    if (triggerOnMount) getData();
  }, [getData, triggerOnMount]);

  return [{ data, status }, getData];
};

const Stats = () => {
  const { playerId: basePlayerId } = useParams();

  const playerID = useMemo(
    () => new SteamID(basePlayerId).getSteam2RenderedID().substring(10),
    [basePlayerId]
  );

  // const [stats, setStats] = useState([]);
  // const getStats = useCallback(() => {
  //   axios
  //     .get(`http://localhost:5000/api/servers/awp/player/${playerID}`)
  //     .then((response) => {
  //       const stats = response.data[0];
  //       setStats(stats);
  //     });
  // }, [playerID]);
  // useEffect(() => getStats(), [getStats]);

  const [{ data: stats, status }] = useAxios(
    "get",
    `http://localhost:5000/api/servers/awp/player/${playerID}`,
    true,
    (data) => data.at(0)
  );

  if (status === "pending") {
    return <p>Loading</p>;
  }
  if (status === "error" || !stats) {
    return <p>Pas de status</p>;
  }

  return (
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
        <p>Playtime : {stats.playtime}</p>
        <p>
          Last seen :
          {/* {new Date(stats.lastconnect * 1_000).toLocaleDateString()} */}
          {new Intl.RelativeTimeFormat("en", {
            localeMatcher: "best fit",
            numeric: "always",
            style: "long",
          }).format(
            -Math.round(
              (+new Date() - stats.lastconnect * 1_000) / 1_000 / 60 / 60 / 24
            ),
            "day"
          )}
        </p>
      </div>
    </div>
  );
};

export default Stats;
