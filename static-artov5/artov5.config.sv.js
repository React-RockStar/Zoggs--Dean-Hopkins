// ARTOv5 v1.3.0 - 10.12.2019

(function() {

  // ************
  // single view config.
  // ************

  // view - A single view. If config.views is present, view isn't used internally.
  // See artov5.view.js (optional)

  var view                          = window.artov5.config.view = {};

  view.path_base_3d                 = './static-artov5/3d/';
  view.path_textures                = view.path_base_3d + 'textures/';
  view.path_occlusion               = view.path_base_3d + 'occlusion_head_reference.artov5';

  view.view_spot                    = 'full-view '; // See CSS classes below...

  view.models                       = [

    // {
    //   path_model:                   view.path_occlusion,
    //   path_textures:                view.path_textures,
    //   name_model:                   null,
    //
    //   is_occlusion_model:           true,
    //   is_material_collection:       false,
    // },

    {
      path_model:                   null,
      path_textures:                view.path_textures,
      name_model:                   null,

      is_occlusion_model:           false,
      is_material_collection:       false,
    }
  ];

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