import 'react';
import AFRAME from 'aframe';

const IntersectionSpawn = AFRAME.registerComponent('intersection-spawn', {
    schema: {
      default: '',
      parse: AFRAME.utils.styleParser.parse
    },
  
    init: function () {

      const data = this.data;
      const el = this.el;

      el.addEventListener(data.event, evt => {

        const spawnEl = document.createElement('a-entity');

        spawnEl.setAttribute('position', evt.detail.intersection.point);
        
        Object.keys(data).forEach(name => {
          if (name === 'event') { return; }
          AFRAME.utils.entity.setComponentProperty(spawnEl, name, data[name]);
        });
        el.sceneEl.appendChild(spawnEl);
      });
    }
  });

export default IntersectionSpawn;