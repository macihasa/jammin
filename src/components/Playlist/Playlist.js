import './Playlist.css';
import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
const Playlist = ({ playlistName, playlistTracks, onRemove, updateName }) => {
  return (
    <div className="Playlist">
      <input type="text" defaultValue={playlistName} onChange={updateName} />
      <Tracklist tracks={playlistTracks} isRemoval={true} onRemove={onRemove} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
};

export default Playlist;
