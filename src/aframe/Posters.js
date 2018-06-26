import { Entity } from "aframe-react";
import React from "react";

import preload from "../data.json";

class Posters extends React.Component {
  render() {
    const posters = preload.cameraButtons.map(poster =>
      <Entity
        key={`${poster.id}`}
        id={`pstr${poster.title}`}
        geometry={{ primitive: "plane" }}
        material={{ color: 'none', transparent: 'true', opacity: '0' }}
        position={poster.position}
        rotation={poster.rotation}
      />
    );

    return (
      <Entity id="postersHodler">
        {posters}
      </Entity>
    );
  }
}

export default Posters;