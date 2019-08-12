//=============================================================================
// main.js
//=============================================================================

PluginManager.setup($plugins);

var fullscreenLoaded = false;
window.onload = function() {
  e = setInterval(function(){
    if(fullscreenLoaded) {
      SceneManager.run(Scene_Boot);
      clearInterval(e);
    }
  },1000);
};
