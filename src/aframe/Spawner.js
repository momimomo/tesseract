import { registerComponent } from 'aframe';
import AFRAME from 'aframe';
import 'react';

const ObjectSpawner = registerComponent('object-spawner', {
    init: function () {
      var sceneElement = document.querySelector('a-scene');
      // console.log('sceneElement :: ', sceneElement);
      var entityEl = document.createElement('a-entity');
      entityEl.setAttribute('geometry', {
          primitive: 'box',
          height: 1,
          width: 1
      });
      entityEl.setAttribute('position', {x: -1, y: 1, z: -2});
      // entityEl.setAttribute('material', 'color', 'red');
      sceneElement.appendChild(entityEl);
    }
  });

export default ObjectSpawner;
