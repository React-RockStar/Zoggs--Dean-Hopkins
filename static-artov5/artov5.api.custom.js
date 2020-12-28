(function() {

  if(window.artov5 && window.artov5.config && window.artov5.api) {

    var onFaceLost = function() {

      console.log('Face lost: Show scanning instructions now.')
    }

    var artov5  = window.artov5
    var config  = artov5.config
    var view    = artov5.config.view
    var api     = artov5.api

    var scanning = true
    var flex     = false

    api.switchToScanning = function() {

      scanning      = true
      config.show3D = false
      config.brfv5.force_draw = true
    };

    api.switchToGoggles = function() {

      scanning      = false
      config.show3D = true
      config.brfv5.force_draw = false
    };

    api.switchToNormal = function() {

      flex = false
      view.models[0].path_model = view.path_base_3d + 'goggles.artov5'
    };

    api.switchToFlex = function() {

      flex = true
      view.models[0].path_model = view.path_base_3d + 'goggles_flex.artov5'
    };

    var faceLost = true;

    api.onBRFv5Tracked = function(faces) {

      for(let i = 0; i < faces.length; i++) {

        const face = faces[i]

        if(face.show) {

          faceLost = false

        } else {

          if(!faceLost) {

            faceLost = true;

            onFaceLost()
          }
        }
      }
    }

    api.setGoogleConfig = function(index, flex) {

      var materialConfigs = flex ? api.materialConfigsFlex : api.materialConfigsNormal;

      if(index < materialConfigs.length) {

        var config = materialConfigs[index];

        for(var i = 0; i < config.length; i++) {

          view.api.setMeshMaterialConfig(config[i].name, config[i].color, config[i].opacity)
        }
      }
    }

    api.onProgress = function(progress) {

      console.log("api.onProgress", progress)

      if(progress === 100) {

        api.switchToFlex()
      }
    };

    api.onThreeJSModelsLoaded = function() {

      api.setGoogleConfig(0, flex)
    };

    if(scanning) {

      api.switchToGoggles()

    } else {

      api.switchToScanning()
    }

  } else {

    console.log('No multi view available.')
  }

})();