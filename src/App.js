import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchBar/SearchResults';
import Playlist from './components/Playlist';

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults />
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
