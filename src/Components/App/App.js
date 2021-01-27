import React from 'react';
import './App.css';
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [
                {
                    id: 1,
                    name: 'Ibrahim',
                    artist: 'Ibbs',
                    album: 'So Solid'
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <h1>so<span className="highlight">ng</span>ify</h1>
                <div className="App">
                    <SearchBar />
                    <div className="App-playlist">
                        <SearchResults searchResults={this.state.searchResults} />
                        <Playlist />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
