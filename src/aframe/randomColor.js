import { registerComponent } from 'aframe';
import 'react';

const randomColor = registerComponent('random-color', {
    dependencies: ['material'],
  
    init: function () {
      this.el.setAttribute('material', 'color', getRandomColor());
      console.log(this.el);
    }
  });
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

export default randomColor;