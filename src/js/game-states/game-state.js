import * as THREE from 'three';
import TWEEN from 'tween.js';

import Camera from '../components/camera';
import Renderer from '../components/renderer';
import Controls from '../components/controls';
import Stats from '../helpers/stats';
import config from '../data/config';

export default class GameState {
  constructor() {
    this._container = document.getElementById(config.appContainerName);

    this._clock == null;
    this._scene = null;
    this._renderer = null;
    this._camera = null;
    this._controls = null;
    this._fog = null;
  }

  start() {
    this._hideLoadingText();
    this._init();
    this._render();
  }

  _init() {
    this._clock = new THREE.Clock();
    this._scene = new THREE.Scene();
    this._fog = new THREE.FogExp2(config.fog.color, config.fog.near);
    this._renderer = new Renderer(this._scene, this._container);
    this._camera = new Camera(this._renderer.threeRenderer);
    this._controls = new Controls(this._camera.threeCamera, this._container);

    if (config.isDev && config.showStats) {
      this.stats = new Stats(this._renderer);
      this.stats.setUp();
    }
  }

  _hideLoadingText() {
    this._container.querySelector('#loading').style.display = 'none';
  }

  _render() {
    if (config.isDev && config.showStats) {
      Stats.start();
    }

    this._renderer.render(this._scene, this._camera.threeCamera);

    if (config.isDev && config.showStats) {
      Stats.end();
    }

    TWEEN.update();
    this._controls.update();

    requestAnimationFrame(this._render.bind(this));
  }
}
