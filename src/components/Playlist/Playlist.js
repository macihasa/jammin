import './Playlist.css';
import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
const Playlist = ({ playlistName, playlistTracks }) => {
  return (
    <div className="Playlist">
      <input type="text" value={playlistName} />
      <Tracklist tracks={playlistTracks} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
};

export default Playlist;
