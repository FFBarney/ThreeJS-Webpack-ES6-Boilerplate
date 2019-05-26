import { Signal } from 'signals';
import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';
import assets from '../data/assets';

export default class PreloaderState {
  constructor() {
    this._manager = new THREE.LoadingManager(this._onLoaded.bind(this), this._onProgress.bind(this));
    this._textureLoader = new THREE.TextureLoader(this._manager);
    this._modelLoaders = new GLTFLoader(this._manager);
    this._root = './assets';

    this.onComplete = new Signal();
  }

  start() {
    this._load();
  }

  _load() {
    const { textures, models } = assets;
    const totalAssetsNumber = textures.length + models.length;
    
    if (totalAssetsNumber === 0) {
      this._onLoaded();
      return;
    }

    textures.forEach(assetName => {
      this._textureLoader.load(`${this._root}/textures/${assetName}`, asset => this._onAssetLoaded(asset, assetName))
    });

    models.forEach(assetName => {
      this._modelLoaders.load(`${this._root}/models/${assetName}`, asset => this._onAssetLoaded(asset, assetName))
    });
  }

  _onAssetLoaded(asset, name) {
    console.log(`asset loaded ${name}`);
  }

  _onLoaded() {
    console.log('Loading complete!');
    this.onComplete.dispatch();
  }

  _onProgress(url, itemsLoaded, itemsTotal) { }
}