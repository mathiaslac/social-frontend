import axios from "axios";
import React, { useState, useEffect } from "react";
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
    <>
      <div className="header__searchWrapper">
        <div className="ideas-select ideas-select-lg header__search ideas-select-single ideas-select-show-search">
          <div className="ideas-select-selector">
            <span className="ideas-select-selection-search">
              <div className="ideas-select-selection-search-input">
                <input
                  className="searchBar__input"
                  type="text"
                  placeholder="Search"
                  onChange={(e) => onChangeHandler(e.target.value)}
                  value={text}
                />
                <div className="suggestions">
                  <div className="sugg__body">
                    {suggestions &&
                      suggestions.slice(0, 9).map((suggestion, i) => (
                        <div className="sugg__search" key={i}>
                          <Link
                            to={`/profile/${steam64(suggestion.auth)}`}
                            className="sugg__flex"
                          >
                            <img
                              src="assets/img/friend1.jpg"
                              alt="user-avatar"
                              width={25}
                              height={25}
                            />
                            <span className="sugg__playername">
                              {suggestion.name}
                            </span>
                          </Link>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </span>
            <span className="ideas-select-selection-placeholder">
              <span>
                <img
                  src="assets/img/svg/navbar/Search.svg"
                  alt="Search"
                  className="search_searchIcon__1aT8z"
                  height="20"
                  width="20"
                />
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
