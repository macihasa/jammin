import './SearchResults.css';
import Tracklist from '../Tracklist/Tracklist';
const SearchResults = ({ searchResults }) => {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <Tracklist tracks={searchResults} />
    </div>
  );
};

export default SearchResults;
