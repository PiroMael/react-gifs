import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  handleUpdate = (event) =>{
    this.props.searchFunction(event.target.value);
  }
  render() {
    return (
      <input type="text" className="form-search"onChange={this.handleUpdate} />
    );
  }
}
export default SearchBar;
