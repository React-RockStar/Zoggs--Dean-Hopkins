// ARTOv5 v1.3.0 - 10.12.2019

// *****************
// artov5 api common
// *****************

// Adds utility function, that are being used by all configurations.
// Overwrite event handlers for

(function() {

  if(window.artov5) {

    var config  = window.artov5.config;

    var api     = window.artov5.api = window.artov5.api || {};

    // Common API function:

    api.startCamera = function() { config.brfv5.camera.enabled = true };
    api.stopCamera  = function() { config.brfv5.camera.enabled = false };

    api.toggleCameraFacingMode = function() {

      if(config.camera.constraints.facingMode === 'user') {

        config.camera.constraints.facingMode = 'environment';
        config.camera.constraints.mirrored = false;

      } else {

        config.camera.constraints.facingMode = 'user';
        config.camera.constraints.mirrored = true;
      }
    };

    // Events:

    // Overwrite any of the following function to react to events.
    // The implementation is only here for your reference.

    api.onProgress = function(progress) {

      if(config.debug_level > 0) {

        console.log("api.onProgress", progress)
      }
    };

    api.onCameraOpened = function(resolution) {

      if(config.debug_level > 0) {

        console.log("api.onCameraOpened", resolution)
      }
    };

    api.onBRFv5Ready = function(numFacesToTrack) {

      if(config.debug_level > 0) {

        console.log("api.onBRFv5Ready", numFacesToTrack)
      }
    };

    api.onThreeJSModelsLoaded = function() {

      if(config.debug_level > 0) {

        console.log("api.onThreeJSModelsLoaded")
      }
    };

    api.onError = function(e) {

      console.error('api.onError', e.code, e.error);

      switch(e.code) {

        case 'CAMERA_FAILED': console.log('Show nice camera popup with instructions.'); break;
        case 'BRFV5_FAILED':  console.log('hmm, old browser (no WebAssembly)???'); break;
        case '3D_FAILED':

          if(e.error.message === 'SCENE_CREATION_FAILED') {

            console.log('hmm, old browser (no WebGL)???');

          } else if(e.error.message === 'LOADING_3D_MODEL_FAILED') {

            console.log('Check your 3d model paths!')

          } else if(e.error.message === 'SETTING_3D_MODEL_NAME_FAILED') {

            console.log('That 3d model name or sku doesn\'t exist for that model.')

          } else {

            console.log('hmm, not sure?')
          }

          break;

        default:

          console.log('hmm, unknwon error');

          break;
      }
    };

  } else {

    console.log('No artov5 namespace set.')
  }

})();
