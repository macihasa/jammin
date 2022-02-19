import './SearchBar.css';
import React from 'react';

const SearchBar = ({ onSearchRequest, onSearchInput }) => {
  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Enter a song title"
        onChange={onSearchInput}
      />
      <button className="SearchButton" onClick={onSearchRequest}>
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;
