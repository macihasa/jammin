import './Tracklist.css';
import React from 'react';
import Track from '../Track/Track';
const Tracklist = ({ tracks }) => {
  let list = tracks.map((track, index) => {
    return (
      <li key={index}>
        <Track name={track.name} artist={track.artist} album={track.album} />
      </li>
    );
  });
  return (
    <div className="Tracklist">
      <ul>{list}</ul>
    </div>
  );
};

export default Tracklist;
