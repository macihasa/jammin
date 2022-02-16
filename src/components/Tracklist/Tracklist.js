import './Tracklist.css';
import React from 'react';
import Track from '../Track/Track';
const Tracklist = ({ tracks, onAdd, onRemove, isRemoval }) => {
  // Returns a all the list items
  let list = tracks.map((tracks) => {
    return (
      <Track
        track={tracks}
        key={tracks.id}
        onAdd={onAdd}
        onRemove={onRemove}
        isRemoval={isRemoval}
      />
    );
  });

  return (
    <div className="Tracklist">
      <ul>{list}</ul>
    </div>
  );
};

export default Tracklist;
