import React, { Component } from 'react';
import SearchBar from './components/searchbar';
import Gif from './components/gif';
import GifList from './components/giflist';
import giphy from 'giphy-api';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      gifs:[],
      selectedGifId:"wK2MKn5jjcvUIe2ux1"
     };
     this.search("homer");
  }

  search = (query) => {
    giphy("zMvnOjXdAh3OY34PG7DJyPtQ89osASMx").search({
      q:query,
      rating:'g',
      limit:10
    }, (err,res) => {
      this.setState({
        gifs: res.data
      });
    });
  }
  render() {
    const gifs = [
      { id: "wK2MKn5jjcvUIe2ux1" },
      { id: "XX6nswKp9Olz1GIKrq" }
    ];
    return (
      <div className="app">
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <div className="gif-list">
            <GifList gifs={this.state.gifs} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
