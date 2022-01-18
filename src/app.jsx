import React, { Component } from 'react';
import SearchBar from './components/searchbar';
import Gif from './components/gif';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() {
    return (
      <div className="app">
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif />
          </div>
        </div>
        <div className="right-scene">
          <div className="gif-list">
            <Gif />
            <Gif />
            <Gif />
            <Gif />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
