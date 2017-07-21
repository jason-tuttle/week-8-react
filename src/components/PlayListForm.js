import React from 'react';

export default class PlayListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      songTitle: '',
      songArtist: '',
      songNotes: ''
      }
    }

  handleChange(key) {
    return function(event) {
      let state = {};
      state[key] = event.target.value;
      this.setState(state);
    }.bind(this);
  }

  addToList = (e) => {
      e.preventDefault();
      this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      this.props.onFetch();
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });

    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
    console.log('Form submit');

  }

  render() {
    const {userName, songArtist, songTitle, songNotes} = this.state;

    return (
      <div className="form-container">
        <form className="form" onSubmit={this.addToList}>
          <p><label htmlFor="name">Your Name:</label></p>
          <p><input onChange={this.handleChange('userName')} name="userName" value={userName} placeholder="Name or User Name"/></p>
          <p><label htmlFor="name">Artist/Band Name:</label></p>
          <p><input onChange={this.handleChange('songArtist')} name="songArtist" value={songArtist} placeholder="Artist or Band Name"/></p>
          <p><label htmlFor="name">Song Title:</label></p>
          <p><input onChange={this.handleChange('songTitle')} name="songTitle" value={songTitle} placeholder="Song Title"/></p>
          <p><label htmlFor="name">Notes:</label></p>
          <p><textarea onChange={this.handleChange('songNotes')} name="songNotes" value={songNotes} rows="5" /></p>
          <button className="btn btn-submit">Submit</button>
        </form>
      </div>
    );
  }

}
