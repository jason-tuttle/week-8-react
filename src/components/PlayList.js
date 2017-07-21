import React from 'react';
import PlayListItem from './PlayListItem';
// import fetchData from './tinylasagna';

export default class PlayList extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: []
    }
  }


  fetchData = (e) => {
      e.preventDefault();
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
        return results.json();
      }).then(data => {
        this.setState({songs: data});
      })
    }

  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
          return results.json();
        }).then(data => {
          this.setState({songs: data});
          console.log("state", this.state.songs);
        })
  }

  render() {
    return (
      <div className="playlist-container">
        <button onClick={this.fetchData} className="btn btn-update">Update Playlist</button>
        {this.state.songs.map((song, idx) =>
          <PlayListItem
            key={idx}
            song={song}
          />
        )}
      </div>
    );
  }

}
