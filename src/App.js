import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import { useState } from 'react';

function App() {
  // States ---------
  const [searchResults, setsearchResults] = useState([
    {
      name: 'Best friend',
      artist: 'Billy Joel',
      album: 'Long lasting journey',
    },
    {
      name: 'Purple Haze',
      artist: 'Jimmy Hendrix',
      album: 'Purple Haze',
    },
  ]);
  const [playlistName, setplaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      id: '1',
      name: 'loverboy',
      artist: 'Mwuana',
      album: 'Nibla',
    },
    {
      id: '2',
      name: 'The Dress',
      artist: 'Dijon',
      album: 'Absolutely',
    },
  ]);

  // Functions ------
  const addTrack = (track) => {
    if (playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
  };

  return (
    <div>
      {addTrack(1)}
      <Header />
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
