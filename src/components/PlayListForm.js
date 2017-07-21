import React from 'react';

export default class PlayListForm extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      songTitle: '',
      songArtist: '',
      songNotes: ''
      }


    }

  handleChange(key) {
    return function(event) {
      var state = {};
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
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }

  render() {
    const {userName, songArtist, songTitle, songNotes} = this.state;
    return (
      <div className="form-container">
        <form className="form">
          <p><label htmlFor="name">Your Name:</label></p>
          <p><input onChange={this.handleChange('userName')} value={userName} placeholder="Name or User Name"/></p>
          <p><label htmlFor="name">Artist/Band Name:</label></p>
          <p><input onChange={this.handleChange('songArtist')} value={songArtist} placeholder="Artist or Band Name"/></p>
          <p><label htmlFor="name">Song Title:</label></p>
          <p><input onChange={this.handleChange('songTitle')} value={songTitle} placeholder="Song Title"/></p>
          <p><label htmlFor="name">Notes:</label></p>
          <p><textarea onChange={this.handleChange('songNotes')} value={songNotes} rows="5" /></p>
          <button className="btn btn-submit">Submit</button>
        </form>
      </div>
    );
  }

}
