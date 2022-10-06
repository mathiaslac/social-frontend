import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./module.search-bar.css";

import SteamID from "steamid";

const SearchBar = () => {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get("http://localhost:5000/api/search");
      setUsers(response.data);
    };
    loadUsers();
  }, []);
  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 2) {
      matches = users.filter((user) => {
        const regex = new RegExp(`${text}`, "gi");
        return user.name.match(regex);
      });
    }
    setSuggestions(matches);
    setText(text);
  };
  const steam64 = (steam) => {
    let steamclass = new SteamID(steam);
    return steamclass.getSteamID64();
  };
  return (
    <Fragment>
      <input
        className="searchBar__input"
        type="text"
        placeholder="Search..."
        onChange={(e) => onChangeHandler(e.target.value)}
        value={text}
      />
      <div className="suggestions">
        <div className="sugg__body">
          {suggestions &&
            suggestions.slice(0, 9).map((suggestion, i) => (
              <div className="sugg__search" key={i}>
                <Link to={`/profile/${steam64(suggestion.auth)}`}>
                  <img src="" alt="user-avatar" width={20} height={20} />
                  <div className="sugg__playername">{suggestion.name}</div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default SearchBar;
