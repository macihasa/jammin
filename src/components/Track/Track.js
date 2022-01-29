import './Track.css';
import React from 'react';

const Track = ({ name, artist, album, playlistTracks }) => {
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{name}</h3>
        <p>
          {artist} | {album}
        </p>
      </div>
      {/* !-- + or - will go here -- */}
      <button className="Track-action">+</button>
    </div>
  );
};

export default Track;
