import React, { Component } from 'react';

import threeEntryPoint from "./threeEntryPoint"
import "./canvas.css"

export default class Canvas extends Component {
    
    componentDidMount() {
        threeEntryPoint(this.threeRootElement);
    }

    render () {
        return (
            <div className="header-header" ref={element => this.threeRootElement = element} />
        );
    }
}