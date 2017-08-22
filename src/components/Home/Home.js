import React, { Component } from 'react';
import './App.css';


class Home extends Component {

  render() {
    return (
      <div className="App">
        <h1>WestSide University</h1>
        <button className='btn'>Math 1010</button>
        <button className='btn'>English 2010</button>
        <button className='btn'>Biology 2020</button>
      </div>
    );
  }
}

export default App;
