import config from './data/config';
import Detector from './utils/detector';

// Styles
import './../css/app.scss';
import GameState from './game-states/game-state';
import PreloaderState from './game-states/preloader-state';

// Check environment and set the Config helper
// eslint-disable-next-line no-undef
if (__ENV__ === 'dev') {
  console.log('----- RUNNING IN DEV ENVIRONMENT! -----');

  config.isDev = true;
}

function init() {
  // Check for webGL capabilities
  if (!Detector.webgl) {
    Detector.addGetWebGLMessage();
  } else {

    const preloaderState = new PreloaderState();
    const gameState = new GameState();

    preloaderState.onComplete.addOnce(() => gameState.start());
    preloaderState.start();
  }
}

init();
