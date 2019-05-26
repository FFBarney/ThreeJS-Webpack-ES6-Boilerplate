import * as THREE from 'three';

import config from '../../data/config';

// Class that creates and updates the main camera
export default class Camera {
  constructor(renderer) {
    const width = renderer.domElement.width;
    const height = renderer.domElement.height;

    // Create and position a Perspective Camera
    this.threeCamera = new THREE.PerspectiveCamera(config.camera.fov, width / height, config.camera.near, config.camera.far);
    this.threeCamera.position.set(config.camera.posX, config.camera.posY, config.camera.posZ);

    // Initial sizing
    this.updateSize(renderer);
    
    // Listeners
    window.addEventListener('resize', () => this.updateSize(renderer), false);
  }

  updateSize(renderer) {
    // Update camera aspect ratio with window aspect ratio
    this.threeCamera.aspect = renderer.domElement.width / renderer.domElement.height;

    // Always call updateProjectionMatrix on camera change
    this.threeCamera.updateProjectionMatrix();
  }
}
