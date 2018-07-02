import { registerComponent } from 'aframe';
import 'react';
import AFRAME from 'aframe';

const Snap = registerComponent('snap', {
    dependencies: ['position'],
  
    schema: {
      offset: {type: 'vec3'},
      snap: {type: 'vec3'}
    },
  
    init: function () {
      this.originalPos = this.el.getAttribute('position');
    },
  
    update: function () {
      const data = this.data;
  
      const pos = AFRAME.utils.clone(this.originalPos);
      pos.x = Math.floor((pos.x + 0.01) / data.snap.x) * data.snap.x + data.offset.x;
      pos.y = Math.floor((pos.y + 0.01) / data.snap.y) * data.snap.y + data.offset.y;
      pos.z = Math.floor((pos.z + 0.01) / data.snap.z) * data.snap.z + data.offset.z;
  
      this.el.setAttribute('position', pos);
    }
  });

export default Snap;