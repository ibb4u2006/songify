import React from 'react';
import './Track.css';

class Track extends React.Component {
    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                </div>
                <button className="Track-action">+/-</button>
            </div>
        );
    }
}

export default Track;