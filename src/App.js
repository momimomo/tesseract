import React, { Component } from 'react';
import './App.css';
import * as THREE from 'three';

class App extends Component {
  
  render() {
			var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
      
      var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			var geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );

      var groupXyOne = new THREE.Group();
      var groupXyTwo = new THREE.Group();
      var groupXyThree = new THREE.Group();

      let cube = [];
      let vect = [];

      function createThreeThreeThreeBlocksMatrix(start) {
        for (let x = 0; x < 3; x++) {
          for (let y = 0; y < 3; y++) {
            for (let z = 0; z < 3; z++) {
              
              if (z === 0) {
                var colorA = 0x22eeff;
              } else if (z === 1) {
                var colorA = 0x0088ff;
              } else if (z === 2) {
                var colorA = 0x22eeff;
              }
              
              cube['cube'+x+y+z] = 
                new THREE.Mesh( geometry, 
                new THREE.LineDashedMaterial( {
                  color: colorA,
                  linewidth: 1,
                  scale: 1,
                  dashSize: 3,
                  gapSize: 1,
                } )
              );
                
              cube['cube'+x+y+z].position.set(
                 x - 1,
                 y - 1, 
                 z - 1
              );
              
              if ( z === 0 ) {
                groupXyOne.add( cube['cube'+x+y+z] );
              } else if ( z === 1 ) {
                groupXyTwo.add( cube['cube'+x+y+z] );
              } else if ( z === 2 ) {
                groupXyThree.add( cube['cube'+x+y+z] );
              }
              scene.add( groupXyOne );
              scene.add( groupXyTwo );
              scene.add( groupXyThree );
            }
          } 
        }
      }
      createThreeThreeThreeBlocksMatrix();
			// scene.add( cube );
      console.log(cube);
      console.log(groupXyTwo);
      camera.position.z = 5;


			var animate = function () {
				requestAnimationFrame( animate );

        groupXyOne.rotation.x += 0.01;

        groupXyOne.rotation.y += 0.01;

        groupXyTwo.rotation.x -= 0.01;

        groupXyTwo.rotation.y -= 0.01;

        groupXyThree.rotation.x += 0.01;

        groupXyThree.rotation.y += 0.01;
        

        // var cubex = cube.position.x;
        // var cubey = cube.position.y;


        // for (let cubes of cube) {

        // var angle = Math.PI / 8;
        // var cubex = cubes.position.x
        // var cubey = cubes.position.y
        // var newcubex = cubex * Math.cos(angle) - cubey * Math.sin(angle);
        // var newcubey = cubey * Math.cos(angle) + cubex * Math.sin(angle);
        // cubes.position.x = newcubex;
        // cubes.position.y = newcubey;

        // }

        // cube.position.x = newcubex;
        // cube.position.y = newcubey;

				renderer.render( scene, camera );
			};

			animate();
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
