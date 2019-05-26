import * as THREE from 'three';

import config from '../data/config';
import OrbitControls from '../utils/orbitControls';

export default class Controls {
  constructor(camera, container) {
    // Orbit controls first needs to pass in THREE to constructor
    const orbitControls = new OrbitControls(THREE);
    this._controls = new orbitControls(camera, container);

    this.init();
  }

  init() {
    this._controls.target.set(config.controls.target.x, config.controls.target.y, config.controls.target.z);
    this._controls.autoRotate = config.controls.autoRotate;
    this._controls.autoRotateSpeed = config.controls.autoRotateSpeed;
    this._controls.rotateSpeed = config.controls.rotateSpeed;
    this._controls.zoomSpeed = config.controls.zoomSpeed;
    this._controls.minDistance = config.controls.minDistance;
    this._controls.maxDistance = config.controls.maxDistance;
    this._controls.minPolarAngle = config.controls.minPolarAngle;
    this._controls.maxPolarAngle = config.controls.maxPolarAngle;
    this._controls.enableDamping = config.controls.enableDamping;
    this._controls.enableZoom = config.controls.enableZoom;
    this._controls.dampingFactor = config.controls.dampingFactor;
  }

  update() {
    this._controls.update();
  }
}
