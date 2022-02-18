import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import { useState } from 'react';

function App() {
  // States: searchResult(array of objects), playlistName(string), playlistTracks(array of objects) trackURIs(array)

  const [searchResults, setsearchResults] = useState([
    {
      id: '1',
      uri: '11',
      name: 'Best friend',
      artist: 'Billy Joel',
      album: 'Long lasting journey',
    },
    {
      id: '2',
      uri: '22',
      name: 'Purple Haze',
      artist: 'Jimmy Hendrix',
      album: 'Purple Haze',
    },
  ]);
  const [playlistName, setplaylistName] = useState('New Playlist');

  const [playlistTracks, setPlaylistTracks] = useState([
    {
      id: '3',
      uri: '33',
      name: 'All of the lights',
      artist: 'Kanye West',
      album: 'Dark beautiful twisted fantasy',
    },
    {
      id: '4',
      uri: '44',
      name: 'The Dress',
      artist: 'Dijon',
      album: 'Absolutely',
    },
  ]);
  const [trackURIs, setTrackURIs] = useState([]);

  // METHODS: addTrack removeTrack updateName savePlaylist

  // Adds a track to state playlistTracks from state searchResults - onClick, (+) button
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

  // Removes a track from state playlistTracks through filter - onClick, (-) button
  const removeTrack = (track) => {
    let tracks = playlistTracks;
    tracks = tracks.filter((currentTrack) => {
      if (currentTrack.id !== track.id) {
        return track;
      }
    });
    setPlaylistTracks([...tracks]);
  };

  // Updates state playlistName with the current name - onChange, input field
  const updateName = (e) => {
    setplaylistName(e.target.value);
  };

  // Updates state trackURIs with the playlist tracks uri component - onClick, savebutton.
  const savePlaylist = () => {
    let uri = [];
    for (let index = 0; index < playlistTracks.length; index++) {
      uri.push(playlistTracks[index].uri);
    }
    setTrackURIs([...uri]);
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
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
