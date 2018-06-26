import React, { Component } from 'react';
import './App.css';
// import { Route } from 'react-router';
import BaseScene from './aframe/Scene'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <BaseScene />
      </div>
    );
  }
}

export default App;
