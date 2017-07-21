import React, { Component } from 'react';
import PlayListForm from './components/PlayListForm';
import PlayList from './components/PlayList';
import './styles/index.css';


class App extends Component {
  render() {
    return (
      <div className="container" id="root">
        <header className="header"><h1>Song Suggester</h1></header>
        <div className="container">
          <PlayListForm />
          <PlayList />
        </div>
      </div>
    );
  }
}

export default App;
