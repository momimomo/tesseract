import React, { Component } from 'react';
import CanvasBuilder from './CanvasBuilder';

let style = {
  width: '100%',
  height: '100%',
}

export default class LoaderContainer extends Component {

  componentDidMount() {
    CanvasBuilder(this.threeRootElement);
  }

  render () {
    return (
        <div className="loader-container" ref={element => this.threeRootElement = element} />
    );
  }
}
