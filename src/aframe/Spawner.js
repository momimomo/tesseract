import { registerComponent } from 'aframe';
import AFRAME from 'aframe';
import 'react';

const ObjectSpawner = registerComponent('object-spawner', {
    init: function () {
      var cursor = document.querySelector('a-cursor');
      cursor.setAttribute("intersection-spawn", "event: click; mixin: mix");
      console.log('scene :: ', document.querySelector('a-scene'));
    }
  });

export default ObjectSpawner;
