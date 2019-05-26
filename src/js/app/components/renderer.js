import * as THREE from 'three';
import config from '../../data/config';

// Main webGL renderer class
export default class Renderer {
  constructor(scene, container) {
    this._scene = scene;
    this._container = container;
    this.threeRenderer = new THREE.WebGLRenderer({ antialias: config.antialias });

    this.threeRenderer.setClearColor(config.clearColor);
    this.threeRenderer.setPixelRatio(window.devicePixelRatio); // For retina
    this.threeRenderer.shadowMap.enabled = config.shadowMapEnabled;
    this.threeRenderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    container.appendChild(this.threeRenderer.domElement);
    this.updateSize();

    document.addEventListener('DOMContentLoaded', () => this.updateSize(), false);
    window.addEventListener('resize', () => this.updateSize(), false);
  }

  updateSize() {
    this.threeRenderer.setSize(this._container.offsetWidth, this._container.offsetHeight);
  }

  render(scene, camera) {
    this.threeRenderer.render(scene, camera);
  }
}
