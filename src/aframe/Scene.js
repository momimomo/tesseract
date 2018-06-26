import React, { Component } from 'react';
import { Entity, Scene } from "aframe-react";
import "aframe";
import "aframe-animation-component";

import Camera from "./Camera";
import Navigation from "./Navigation";
import Posters from "./Posters";
import Loader from '../three/Loader';

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

    componentDidMount() {
        setInterval(() => {
        this.setState({
            loading: false
        });
    }, 3000)
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
