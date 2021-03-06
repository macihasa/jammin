import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import { useState } from 'react';
import search from './util/Spotify';
import { savePlaylist } from './util/Spotify';

function App() {
  // States: searchResult(array of objects), playlistName(string), playlistTracks(array of objects) trackURIs(array)

  const [searchTerm, setsearchTerm] = useState('');
  const [searchResults, setsearchResults] = useState([]);
  const [playlistName, setplaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  // METHODS: addTrack, removeTrack, updateName, save, searchInput, searchOutput, removeDuplicates

  // Adds a track to state playlistTracks from state searchResults - onClick, (+) button
  // Removes duplicates in search
  const addTrack = (track) => {
    let tracks = playlistTracks;
    let result = searchResults;

    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    } else {
      tracks.push(track);
      removeDuplicates(result);
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

  // Updates state playlistName with the current name - onChange, Input field
  const updateName = (e) => {
    setplaylistName(e.target.value);
  };

  // Posts playlistName and playlistTracks to Spotify - onClick, Savebutton.
  const save = () => {
    let trackUris = playlistTracks.map((track) => track.uri);

    savePlaylist(playlistName, trackUris).then(() => {
      setplaylistName('New Playlist');
      setPlaylistTracks([]);
    });
  };

  // Updates state searchTerm with the value of search input - onChange, input.
  const searchInput = (e) => {
    setsearchTerm(e.target.value);
  };

  // Searches using the spotify-API with a user token and updates state searchResults - onClick, Searchbutton
  // Removes duplicates in search
  const searchOutput = () => {
    search(searchTerm).then((searchResults) => {
      removeDuplicates(searchResults);
    });
  };

  // Compares playlist and searchresult uris and removes duplicates in search.
  const removeDuplicates = (searchResults) => {
    const uris = playlistTracks.map((track) => track.uri);

    const updatedSearch = searchResults.filter(
      (track) => !uris.includes(track.uri)
    );

    setsearchResults([...updatedSearch]);
  };
  return (
    <div>
      <Header />
      <div className="App">
        <SearchBar onSearchRequest={searchOutput} onSearchInput={searchInput} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            updateName={updateName}
            onSave={save}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
