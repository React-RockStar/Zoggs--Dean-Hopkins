// ARTOv5 v1.3.0 - 10.12.2019

// **********************
// artov5 api single view
// **********************

// Looks for window.artov5.config.view and adds some api functions to handle
// 3d model changes etc.

(function() {

  if(window.artov5 && window.artov5.config && window.artov5.config.views) {

    // Creating the artov5 namespace, if it isn't available yet.

    var artov5  = window.artov5;

    var views   = artov5.config.views;

    var api     = artov5.api = artov5.api || {};

    api.setModelNameInView = function(nameModel, indexView) {

      if(indexView < views.length) {

        views[indexView].api.setModelName(nameModel)
      }
    };

    api.setModelInView = function(pathModel, nameModel, indexView) {

      if(indexView < views.length) {

        views[indexView].api.setModel(pathModel, nameModel)
      }
    };

    api.setMeshMaterialConfigInView = function(nameMesh, color, opacity, indexView) {

      if(indexView < views.length) {

        views[indexView].api.setMeshMaterialConfig(nameMesh, color, opacity)
      }
    };

  } else {

    console.log('No multi view available.')
  }

})();