import React, { Component } from 'react';

// functional component
// const SearchBar = () => {
//   return <input />;
// };

// class component
class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state = { term: '' };
  }

  // driver of jsx return
  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={(event) => this.setState({ term: event.target.value }) } 
          />
        Value of input: {this.state.term}
      </div>
    );
  }
}

export default SearchBar;
