import React from "react";
// import styled from "styled-components";

import preload from "../data.json";
import '../App.css'

class Navigation extends React.Component {
  state = {};

  render() {
    const homeButton = (
      <button id="home_btn" onClick={this.props.buttonHandler("Home")}>
        Home
      </button>
    );

    const buttons = preload.cameraButtons.map(button =>
      <button
        key={`${button.id}`}
        onClick={this.props.buttonHandler(button.title)}
      >
        {button.title}
      </button>
    );

    return (
      <div>
        {homeButton}
        {buttons}
      </div>
    );
  }
}

export default Navigation;