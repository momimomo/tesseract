import React, { Component } from 'react';
import CanvasBuilder from './CanvasBuilder';

let style = {
  width: '300px',
  height: '300px',
}

export default class LoaderContainer extends Component {

  componentDidMount() {
    CanvasBuilder(this.threeRootElement);
  }

  render () {
    return (
        <div className="loader-container" ref={element => this.threeRootElement = element} style={style} />
    );
  }
}
