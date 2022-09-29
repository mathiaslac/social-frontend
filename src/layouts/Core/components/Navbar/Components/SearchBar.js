import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./module.search-bar.css";

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
        return user.playername.match(regex);
      });
    }
    setSuggestions(matches);
    setText(text);
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
                <Link to={`/${suggestion.steamid}`}>
                  <div className="sugg__playername">
                    {suggestion.playername}
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default SearchBar;
