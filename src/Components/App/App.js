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
                },
                {
                    id: 2,
                    name: 'Ibrahim 2',
                    artist: 'Ibbs',
                    album: 'So Solid'
                },
                {
                    id: 3,
                    name: 'Ibrahim 3',
                    artist: 'Ibbs',
                    album: 'So Solid'
                }
            ],
            playlistName: 'Running',
            playlistTracks: [
                {
                    id: 1,
                    name: 'Track 1',
                    artist: 'Ibbs 1',
                    album: 'So Solid New'
                }
            ]
        };
        this.addTrack = this.addTrack.bind(this);
    }
    addTrack(track) {
        if (this.state.playlistTracks.find((trackExists) => trackExists.id === track.id ) === undefined) {
            const newTracks = this.state.playlistTracks.push(track);
            this.setState(Object.assign({}, newTracks));
        }
    }

    render() {
        return (
            <div>
                <h1>so<span className="highlight">ng</span>ify</h1>
                <div className="App">
                    <SearchBar />
                    <div className="App-playlist">
                        <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
                        <Playlist playListName={this.state.playlistName} playListTracks={this.state.playlistTracks} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
