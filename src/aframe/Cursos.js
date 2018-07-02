// key component from aframe-core library
import { registerComponent } from "aframe";
import { THREE } from "aframe";

const AFRAME = require("aframe");

//node-esque component exporting method
const crawlingCursor = registerComponent("crawlingsuper-cursor", {
  dependencies: ["raycaster"],

  schema: {
    target: {
      type: "selector"
    }
  },

  multiple: false,

  init: function() {
    var el = this.el;
    var data = this.data;

    var cursorPosition;
    var lookAtTarget;
    if (data.target === null) {
      var cursor = document.querySelector("a-cursor");

      if (cursor === null) {
        console.warn("Please put a-cursor in a document");
        return;
      }
      data.target = cursor;
    }

    var raycaster = document.querySelector("#freeCamera").components.raycaster;
    var mainSceneObj = document.querySelector("#mainSceneObj");
    mainSceneObj.addEventListener("model-loaded", () => {
      raycaster.refreshObjects();
    });

    el.addEventListener("raycaster-intersection", function(e) {
      var intersection = getNearestIntersection(e.detail.intersections);
      if (!intersection) {
        return;
      }

      var mat = intersection.object.matrixWorld;
      mat.setPosition(new THREE.Vector3(0, 0, 0));

      // change local normal into global normal
      var global_normal = intersection.face.normal
        .clone()
        .applyMatrix4(mat)
        .normalize();

      // look at target coordinate = intersection coordinate + global normal vector
      lookAtTarget = new THREE.Vector3().addVectors(
        intersection.point,
        global_normal
      );
      data.target.object3D.lookAt(lookAtTarget);

      // cursor coordinate = intersection coordinate + normal vector * 0.05(hover 5cm above intersection point)
      cursorPosition = new THREE.Vector3().addVectors(
        intersection.point,
        global_normal.multiplyScalar(0.05)
      );

      /* NOTE#1: Added to deal with 0.7.0 position update spam */
      // target position is now only updated on differing position
      let oldposJSON = JSON.stringify(cursorPosition);
      let newposJSON = JSON.stringify(data.target.getAttribute("position"));

      if (oldposJSON != newposJSON) {
        // console.log("position updated");
        // console.log(cursorPosition);
        data.target.setAttribute("position", cursorPosition);
        // console.log(data.target.getAttribute("position"));
      } else {
        // console.log("position unchanged");
      }
      /* end of position update spam bugfix */

      function getNearestIntersection(intersections) {
        for (var i = 0, l = intersections.length; i < l; i++) {
          // ignore cursor itself to avoid flicker && ignore "ignore-ray" class
          if (
            data.target === intersections[i].object.el ||
            intersections[i].object.el.classList.contains("ignore-ray")
          ) {
            continue;
          }
          return intersections[i];
        }
        return null;
      }
      // }, 500);
    });
  }
});

export default crawlingCursor;