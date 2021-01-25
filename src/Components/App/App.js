import './App.css';
import '../SearchBar/SearchBar';
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";

function App() {
  return (
      <div>
        <h1>so<span className="highlight">ng</span>ify</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults />
          </div>
        </div>
      </div>
  );
}

export default App;
