import React, { Component } from 'react';
import PlayListForm from './components/PlayListForm';
import PlayList from './components/PlayList';
import './styles/index.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      songs: []
    }
  }

  fetchData = (e) => {
      e && e.preventDefault();
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
        return results.json();
      }).then(data => {
        this.setState({songs: data});
      })
    }

  render() {
    return (
      <div className="container" id="root">
        <header className="header"><h1>Song Suggester</h1></header>
        <div className="container">
          <PlayListForm onFetch={this.fetchData} />
          <PlayList onFetch={this.fetchData} songs={this.state.songs} />
        </div>
      </div>
    );
  }
}

export default App;
