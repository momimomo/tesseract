import React, { Component } from 'react';
import './App.css';
import * as THREE from 'three';
import LoaderContainer from './LoaderContainer';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="Loader">
          <LoaderContainer />
        </div>
        <div className="loader-text">Loading...</div>
      </div>
    );
  }
}

export default App;
