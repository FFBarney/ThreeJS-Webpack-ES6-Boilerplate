import * as THREE from 'three';

import OrbitControls from '../../utils/orbitControls';
import config from '../../data/config';

// Controls based on orbit controls
export default class Controls {
  constructor(camera, container) {
    // Orbit controls first needs to pass in THREE to constructor
    const orbitControls = new OrbitControls(THREE);
    this.threeControls = new orbitControls(camera, container);

    this.init();
  }

  init() {
    this.threeControls.target.set(config.controls.target.x, config.controls.target.y, config.controls.target.z);
    this.threeControls.autoRotate = config.controls.autoRotate;
    this.threeControls.autoRotateSpeed = config.controls.autoRotateSpeed;
    this.threeControls.rotateSpeed = config.controls.rotateSpeed;
    this.threeControls.zoomSpeed = config.controls.zoomSpeed;
    this.threeControls.minDistance = config.controls.minDistance;
    this.threeControls.maxDistance = config.controls.maxDistance;
    this.threeControls.minPolarAngle = config.controls.minPolarAngle;
    this.threeControls.maxPolarAngle = config.controls.maxPolarAngle;
    this.threeControls.enableDamping = config.controls.enableDamping;
    this.threeControls.enableZoom = config.controls.enableZoom;
    this.threeControls.dampingFactor = config.controls.dampingFactor;
  }
}
