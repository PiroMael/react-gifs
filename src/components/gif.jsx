import React, { Component } from "react";

class Gif extends Component {
  render() {
    const src =`https://media1.giphy.com/media/${this.props.id}/giphy.gif?cid=ecf05e475e18gjg5m0ijoa5bug3ei7210xhfe4kohlvqyvcv&rid=giphy.gif&ct=g`;
    return (
      <img className="gif" src={src} alt="gif" />
    );
  }
}
export default Gif;
