import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <h1>Hi im a react App</h1>
    //   </div>
    // );
    return React.createElement('div', null, 'h1', 'Hi I\'m a react app')
  }
}

export default App;
