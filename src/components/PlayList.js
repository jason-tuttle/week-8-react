import React from 'react';
import PlayListItem from './PlayListItem';
// import fetchData from './tinylasagna';

export default class PlayList extends React.Component {

  componentDidMount() {
    this.props.onFetch();
  }

  render() {
    return (
      <div className="playlist-container">
        <button onClick={this.props.onFetch} className="btn btn-update">Update Playlist</button>
        {this.props.songs.map((song, idx) =>
          <PlayListItem
            key={idx}
            song={song}
          />
        )}
      </div>
    );
  }

}
