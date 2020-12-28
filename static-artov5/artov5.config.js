// ARTOv5 v1.3.0 - 10.12.2019

// **************
// artov5 config
// **************

// This external config file is necessary for artov5-ext to function properly.
// The app will wait for window.artov5.config and window.artov5.api to be available.

// artov5.config is made reactive by Vue.js. So simply setting most variables will
// result in changes in artov5-ext.

(function() {

  // Creating the artov5 namespace, if it isn't available yet.

  var artov5                        = window.artov5       = window.artov5       || {};

  var config                        = artov5.config       = artov5.config       || {};

  var brfv5                         = config.brfv5        = config.brfv5        || {};
  var camera                        = config.brfv5.camera = config.brfv5.camera || {};

  // Whether or not to console.log and show debug information.
  // level 0: Don't show any debug info.
  // level 1: Show artov5-ext specific console.log entries.
  // level 2: level 1 + Show Face Tracking Results + BRFv5 utility log info.

  config.debug_level                = 0;

  // numInitialViews                - In a multi view setup, defines the number of initially active views.
  // show3D                         - Whether or not to show 3d models.

  config.numInitialViews            = 1;
  config.show3D                     = true;

  // *****************
  // BRFv5 SDK config.
  // *****************

  // app_id         - A unique identifier for your project.
  // path_to_models - The folder where the brf models reside in.
  // model_type     - Either 42l or 68l, 42l is fine for try-on like this app.

  brfv5.app_id                      = 'com.zoggs.artov5';
  brfv5.path_to_models              = './static-brfv5/';
  brfv5.model_type                  = '68l';

  // num_faces_to_track_mobile      - How many faces should be tracked simultaneously on mobile devices.
  // num_faces_to_track_desktop     - How many faces should be tracked simultaneously on desktop computers.
  // 1 face results in best performance. If you choose to track more than one, each tracked face will get it's own 3d model.

  brfv5.num_faces_to_track_mobile   = 1;
  brfv5.num_faces_to_track_desktop  = 1;

  // num_chunks_mobile              - How many chunks of the brf model file should be loaded on mobile devices.
  // num_chunks_desktop             - How many chunks of the brf model file should be loaded on desktop computers.
  // Less chunks to load means faster startup time, less bandwidth, less computations, better performance, but also less accuracy.

  brfv5.num_chunks_mobile           = 4;
  brfv5.num_chunks_desktop          = 6; // eg. brfv5.num_faces_to_track_desktop === 1 ? 8 : brfv5.num_faces_to_track_desktop === 2 ? 6 : 4;

  // enable_dynamic_performance     - false results in a consistant tracking behavior, true results in better performance on
  // mobile devices, since the app monitors the CPU usage and dynamically configures brf to run smoother, but with less accuracy.

  brfv5.enable_dynamic_performance  = true;

  // show_debug                     - Internally set to config.debug_level > 1,
  // only show face tracking results if debug_level is larger than 1.

  brfv5.show_debug                  = config.debug_level > 1;

  // force_draw                     - Whether or not to force drawing of the face shape.

  brfv5.force_draw                  = false;

  // ********************
  // BRFv5 camera config.
  // ********************

  // enabled                        - Initially true for autostarting the camera.

  camera.enabled                    = true;
  camera.mirrored                   = true;

  //  480p      -   640x480@30, (default) only use higher settings, if you know your hardware (CPU/Camera) does support it.
  //  720p      -  1280x720@30, not recommended.
  // 1080p      - 1920x1080@30, not recommended.
  // mirrored   - You may want to set it to false, while using the rear camera (facingMode - 'environment' instead of 'user').

  camera.constraints                = {
    width: 640, height: 480, frameRate: 30, facingMode: 'user', mirrored: true
  };

  var parseGetParams = function() {

    var params = {};

    window.location.search.substr(1).split('&').forEach(
      (item) => { var a = item.split('='); if(a.length === 2) { params[a[0]] = a[1] } });

    return params;
  };

  var overwriteConfig = function() {

    var params = parseGetParams();

    if(params.hasOwnProperty('dl')) { config.debug_level          = parseInt(params.dl+'') }
    if(params.hasOwnProperty('ec')) { config.brfv5.camera.enabled = params.ec === 'true' || params.ec === '1' }
    if(params.hasOwnProperty('sv')) { config.numInitialViews      = parseInt(params.sv + '') }
  };

  overwriteConfig();

})();

