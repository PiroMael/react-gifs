import React, { Component } from "react";

class Gif extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() {
    return (
      <img className="gif" src="https://media1.giphy.com/media/wK2MKn5jjcvUIe2ux1/giphy.gif?cid=ecf05e475e18gjg5m0ijoa5bug3ei7210xhfe4kohlvqyvcv&rid=giphy.gif&ct=g" alt="gif"/>
    );
  }
}
export default Gif;
