// ARTOv5 v1.3.0 - 10.12.2019

(function() {

  // ************
  // single view config.
  // ************

  // view - A single view. If config.views is present, view isn't used internally.
  // See artov5.view.js (optional)

  var views                         = window.artov5.config.views = [];

  views.path_base_3d                = './static-artov5/3d/';
  views.path_textures               = views.path_base_3d + 'textures/';
  views.path_occlusion              = views.path_base_3d + 'occlusion_head_reference.artov5';

  var createView = function(viewSpot, pathModel, nameModel) {

    var view = {

      view_spot:                    viewSpot,

      models: [

        {
          path_model:               views.path_occlusion,
          path_textures:            views.path_textures,
          name_model:               null,

          is_occlusion_model:       true,
          is_material_collection:   false,
        },

        {
          path_model:               pathModel,
          path_textures:            views.path_textures,
          name_model:               nameModel,

          is_occlusion_model:       false,
          is_material_collection:   false,
        }
      ]
    }

    view.api = {

      setModelName: function(nameModel) {

        var models = view.models;

        for(var i = 0; i < models.length; i++) {

          var model = models[i];

          if(!model.is_occlusion_model && !model.is_material_collection) {

            model.name_model = nameModel;
          }
        }
      },

      setModel: function(pathModel, nameModel) {

        var models = view.models;

        for(var i = 0; i < models.length; i++) {

          var model = models[i];

          if(!model.is_occlusion_model && !model.is_material_collection) {

            model.path_model = views.path_base_3d + pathModel; // view + s
            model.name_model = nameModel;
          }
        }
      },

      setMeshMaterialConfig: function(nameMesh, color, opacity) {

        if(view.api.updateMeshMaterial) {

          if(!opacity) opacity = 1.0;

          view.api.updateMeshMaterial(nameMesh, { color: color, opacity: opacity })
        }
      }
    }

    return view;
  };

  views.push(createView('top-row', views.path_base_3d + 'rayban.artov5', 'blue'))
  views.push(createView('bottom-row', views.path_base_3d + 'rayban.artov5', 'black'))

  // view_spot, either:
  //
  // .full-view    { top:      0; left:    0; width: 100%; height: 100% }
  //
  // .left-column  { top:      0; left:    0; width:  50%; height: 100% }
  // .right-column { top:      0; right:   0; width:  50%; height: 100% }
  //
  // .top-row      { top:      0; left:    0; width: 100%; height:  50% }
  // .bottom-row   { bottom:   0; left:    0; width: 100%; height:  50% }
  //
  // .top-left     { top:      0; left:    0; width:  50%; height:  50% }
  // .top-right    { top:      0; right:   0; width:  50%; height:  50% }
  // .bottom-left  { bottom:   0; left:    0; width:  50%; height:  50% }
  // .bottom-right { bottom:   0; right:   0; width:  50%; height:  50% }

})();