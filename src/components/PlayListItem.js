import React from 'react';

//   {
//   userName: '',
//   songTitle: '',
//   songArtist: '',
//   songNotes: ''
//   }

export default class PlayListItem extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    const {song} = this.props;
    return (
      <div className="song-container">
        <p><span className="song-label">User:</span>{song.userName}</p>
        <p><span className="song-label">Artist/Band:</span>{song.songArtist}</p>
        <p><span className="song-label">Title:</span>{song.songTitle}</p>
        <p><span className="song-label">Notes:</span>{song.songNotes}</p>
      </div>
    );
  }

}
