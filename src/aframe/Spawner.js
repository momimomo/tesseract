import { registerComponent } from 'aframe';
import AFRAME from 'aframe';
import 'react';

const ObjectSpawner = registerComponent('object-spawner', {
    init: function () {
      var sceneElement = document.querySelector('a-cursor');
      sceneElement.setAttribute("intersection-spawn", "event: click; mixin: mix");
      console.log('sceneElement :: ', sceneElement);
    }
  });

export default ObjectSpawner;
