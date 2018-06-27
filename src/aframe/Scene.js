import React, { Component } from 'react';
import { Entity, Scene } from "aframe-react";
import "aframe";
import "aframe-animation-component";
import "aframe-crawling-cursor";
import { registerComponent } from 'aframe';

import Camera from "./Camera";
import Navigation from "./Navigation";
import Posters from "./Posters";
import Loader from '../three/Loader';

// var objectSpawner = registerComponent('log', {
//     schema: {type: 'string'},

//     init: function () {
//       console.log('ss');
//     }
//   });



class BaseScene extends Component {
    state = {
        cameraTarget: "",
        loading: true
      };

    setNextCameraTarget = nextCameraTarget => () => {
        this.setState({
            cameraTarget: nextCameraTarget
        });
    };

    spawnObj() {
        var el = this.el
        var sceneEl = document.querySelector('a-scene');
        var entityEl = document.createElement('a-entity');
        entityEl.setAttribute('geometry', {
            primitive: 'box',
            height: 1,
            width: 1
        });
        entityEl.setAttribute('position', {x: 1, y: 2, z: 1});
        entityEl.setAttribute('material', 'color', 'red');
        console.log('el', el)
        console.log(sceneEl);
        sceneEl.appendChild(entityEl);
    }

    componentDidMount() {
        setInterval(() => {
        this.setState({
            loading: false
        });
    }, 1000)
    var sceneEl = document.querySelector('a-scene');
    console.log(sceneEl);
    };
    
    render() {
        return (
            <div>
                <div>
                    {this.state.loading && <Loader />}
                </div>
                <div>
                    {this.state.loading === false
                        && <div>
                            {/* <button className="spawn-button" onClick={this.spawnObj()}>SPAWN</button> */}
                            <Navigation buttonHandler={this.setNextCameraTarget} />
                            <Scene shadow={{ type: "basic"}} stats>
                                <Entity
                                    geometry={{
                                      primitive: "plane",
                                      height: "10",
                                      width: "10"
                                    }}
                                    material={{ color: 'grey' }}
                                    position={{ x: 0, y: 0, z: 0 }}
                                    rotation="-90 0 0"
                                    shadow={{ receive: this.state.shadowsON }}
                                />
                                <Entity
                                    light={{
                                        type: "ambient",
                                        intensity: 0.8,
                                    }}
                                    position={{ x: 0.193, y: 2.601, z: 7.546 }}
                                    rotation="-90 0 0"
                                />
                                <Entity primitive='a-cursor'/>
                                <Entity primitive='a-sky'/>
                                {/* <Entity primitive='a-camera' raycaster crawling-cursor/> */}
                                <Posters />
                                <Camera cameraTarget={this.state.cameraTarget} />
                            </Scene>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default BaseScene;
