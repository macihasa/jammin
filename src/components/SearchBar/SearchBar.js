import './SearchBar.css';
import React from 'react';

const SearchBar = () => {
  return (
    <div className="SearchBar">
      <input type="text" placeholder="Enter a song title" />
      <button className="SearchButton">SEARCH</button>
    </div>
  );
};

export default SearchBar;
