import './Track.css';
import React from 'react';

const Track = ({ track, onAdd, onRemove, isRemoval }) => {
  const addTrack = () => {
    onAdd(track);
  };
  const removeTrack = () => {
    if (isRemoval) {
      onRemove(track);
    }
  };
  const sign = isRemoval ? '-' : '+';
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>

      <button
        className="Track-action"
        onClick={isRemoval ? removeTrack : addTrack}
      >
        {sign}
      </button>
    </div>
  );
};

export default Track;
