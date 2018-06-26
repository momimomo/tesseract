import React, { Component } from 'react';
import '../App.css';
import * as THREE from 'three';

export default canvas => {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 
        75, 
        window.innerWidth/window.innerHeight, 
        0.1, 
        1000 
    );
    camera.position.z = 5;

    const screenDimensions = {
        width: canvas.width,
        height: canvas.height,
    };

    const renderer = buildRender(screenDimensions);
    
    function buildRender({ width, height }) {
        const render = new THREE.WebGLRenderer( {canvas: canvas, antialias: true, alpha: true} );
        const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
        render.setPixelRatio(DPR);
        render.setSize( width, height );
        return render;
    };

    var geometry = new THREE.BoxGeometry( 0.1, 0.1, 0.1 );

    var groupXyOne = new THREE.Group();
    var groupXyTwo = new THREE.Group();
    var groupXyThree = new THREE.Group();
    var groupXyFour = new THREE.Group();
    var groupXyFive = new THREE.Group();

    let cube = [];

    function createThreeThreeThreeBlocksMatrix(start) {
      for (let x = 0; x < 5; x++) {
        for (let y = 0; y < 5; y++) {
          for (let z = 0; z < 5; z++) {
            
            if (z === 0) {
              var colorA = 0x0f2344;
            } else if (z === 1) {
              var colorA = 0x195aa8;
            } else if (z === 2) {
              var colorA = 0x21bced;
            } else if (z === 3) {
              var colorA = 0x195aa8;
            } else if (z === 4) {
              var colorA = 0x0f2344;
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
               x / 2 - 1,
               y / 2 - 1, 
               z / 2 - 1
            );
            
            if ( z === 0 ) {
              groupXyOne.add( cube['cube'+x+y+z] );
            } else if ( z === 1 ) {
              groupXyTwo.add( cube['cube'+x+y+z] );
            } else if ( z === 2 ) {
              groupXyThree.add( cube['cube'+x+y+z] );
            } else if ( z === 3 ) {
              groupXyFour.add( cube['cube'+x+y+z] );
            } else if ( z === 4 ) {
              groupXyFive.add( cube['cube'+x+y+z] );
            }
          }
        } 
      }
      scene.add( groupXyOne );
      scene.add( groupXyTwo );
      scene.add( groupXyThree );
      scene.add( groupXyFour );
      scene.add( groupXyFive );
    }
    createThreeThreeThreeBlocksMatrix();

    function mergeRotX (x, offset, angleval) { 
        for (let k = 0; k < 5; k++) {
            for (let j = 0; j < 5; j++) {
          
                let cubeId = String(x) + String(k) + String(j);
          
                let cubeX = cube[ 'cube' + cubeId ].position.x;
                let cubeY = cube[ 'cube' + cubeId ].position.y;

                let angle = angleval * Math.PI / 180

                let newCubeX = cubeX * Math.cos(angle) - (cubeY + offset ) * Math.sin(angle);
                let newCubeY = cubeY * Math.cos(angle) + (cubeX + offset ) * Math.sin(angle);

                cube[ 'cube' + cubeId ].position.x = newCubeX;
                cube[ 'cube' + cubeId ].position.y = newCubeY;
            }
        }
    }

    function mergeRotY (y, offset, angleval) { 
        for (let k = 0; k < 5; k++) {
            for (let j = 0; j < 5; j++) {
          
                let cubeId = String(k) + String(y) + String(j);

                let cubeX = cube[ 'cube' + cubeId ].position.x;
                let cubeY = cube[ 'cube' + cubeId ].position.y;

                let angle = angleval * Math.PI / 180

                let newCubeX = cubeX * Math.cos(angle) - (cubeY + offset ) * Math.sin(angle);
                let newCubeY = cubeY * Math.cos(angle) + (cubeX + offset ) * Math.sin(angle);

                cube[ 'cube' + cubeId ].position.x = newCubeX;
                cube[ 'cube' + cubeId ].position.y = newCubeY;
            }
        } 
    }

    function mergeRotZ (z, offset, angleval) { 
        for (let k = 0; k < 5; k++) {
            for (let j = 0; j < 5; j++) {
          
                let cubeId = String(k) + String(j) + String(z);

                let cubeX = cube[ 'cube' + cubeId ].position.x;
                let cubeY = cube[ 'cube' + cubeId ].position.y;

                let angle = angleval * Math.PI / 180

                let newCubeX = cubeX * Math.cos(angle) - (cubeY + offset ) * Math.sin(angle);
                let newCubeY = cubeY * Math.cos(angle) + (cubeX + offset ) * Math.sin(angle);

                cube[ 'cube' + cubeId ].position.x = newCubeX;
                cube[ 'cube' + cubeId ].position.y = newCubeY;
            }
        } 
    }

    var update = function () {

        groupXyOne.rotation.x += 0.02; 
        groupXyOne.rotation.y += 0.02;
        groupXyOne.rotation.z += 0.02;

        groupXyTwo.rotation.x += 0.02;
        groupXyTwo.rotation.y += 0.02;
        
        groupXyThree.rotation.x += 0.02;
        groupXyThree.rotation.y += 0.02;
        groupXyThree.rotation.z -= 0.02;  
        
        groupXyFour.rotation.x += 0.02;
        groupXyFour.rotation.y += 0.02; 
        
        groupXyFive.rotation.x += 0.02;
        groupXyFive.rotation.y += 0.02;
        groupXyFive.rotation.z += 0.02;              
        
        mergeRotY(0, 0, -1);
        mergeRotY(1, 0,  0.5);
        mergeRotY(2, 0, -1);
        mergeRotY(3, 0,  0.5);
        mergeRotY(4, 0, -1);
        
        mergeRotX(2, 0, 2);
        renderer.render( scene, camera );
    };

    return {
      update,
    };
}