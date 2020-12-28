// ARTOv5 v1.3.0 - 10.12.2019

// **********************
// artov5 api single view
// **********************

// Looks for window.artov5.config.view and adds some api functions to handle
// 3d model changes etc.

(function() {

  if(window.artov5 && window.artov5.config && window.artov5.config.view) {

    // Creating the artov5 namespace, if it isn't available yet.

    var artov5  = window.artov5;

    var view    = artov5.config.view;

    var api     = view.api = view.api || {};

    api.setModelName = function(nameModel) {

      var models = view.models;

      for(var i = 0; i < models.length; i++) {

        var model = models[i];

        if(!model.is_occlusion_model && !model.is_material_collection) {

          model.name_model = nameModel;
        }
      }
    };

    api.setModel = function(pathModel, nameModel) {

      var models = view.models;

      for(var i = 0; i < models.length; i++) {

        var model = models[i];

        if(!model.is_occlusion_model && !model.is_material_collection) {

          model.path_model = view.path_base_3d + pathModel;
          model.name_model = nameModel;
        }
      }
    };

    api.setMeshMaterialConfig = function(nameMesh, color, opacity) {

      if(view.api.updateMeshMaterial) {

        if(!opacity) opacity = 1.0;

        view.api.updateMeshMaterial(nameMesh, { color: color, opacity: opacity })
      }
    };

  } else {

    console.log('No single view available.')
  }

})();