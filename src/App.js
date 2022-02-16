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
      id: '1',
      name: 'Best friend',
      artist: 'Billy Joel',
      album: 'Long lasting journey',
    },
    {
      id: '2',
      name: 'Purple Haze',
      artist: 'Jimmy Hendrix',
      album: 'Purple Haze',
    },
  ]);
  const [playlistName, setplaylistName] = useState('New Playlist');

  const [playlistTracks, setPlaylistTracks] = useState([
    {
      id: '3',
      name: 'All of the lights',
      artist: 'Kanye West',
      album: 'Dark beautiful twisted fantasy',
    },
    {
      id: '4',
      name: 'The Dress',
      artist: 'Dijon',
      album: 'Absolutely',
    },
  ]);

  // 1:01:39 / 2:11:42
  // Methods/Functions-----------------------------------

  const addTrack = (track) => {
    let tracks = playlistTracks;

    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      console.log(tracks);
      return;
    } else {
      tracks.push(track);
      setPlaylistTracks([...tracks]);
      return;
    }
  };

  const removeTrack = (track) => {
    let tracks = playlistTracks;
    tracks = tracks.filter((currentTrack) => {
      if (currentTrack.id !== track.id) {
        return track;
      }
    });
    setPlaylistTracks([...tracks]);
  };
  const updateName = (e) => {
    setplaylistName(e.target.value);
  };

  return (
    <div>
      <Header />
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            updateName={updateName}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
