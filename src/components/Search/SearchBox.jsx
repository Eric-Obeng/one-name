import React from "react";
import "./searchBox.scss";

const SearchBox = ({ onInputChange }) => {
  return (
    <div className="search__container">
      <input
        type="text"
        id="search"
        name="search"
        aria-autocomplete={true}
        placeholder="Type Keyword here..."
        className="search__input"
        onChange={(event) => onInputChange(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
