import React from 'react';

const Playlist = () => {
  return (
    <div className="Playlist">
      <input type="text" value={'New Playlist'} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
};

export default Playlist;
