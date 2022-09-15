window.onload = function () {
  document.querySelector("#bluebutton").addEventListener("click", function () {
    var sceneEl = document.querySelector("a-scene");
    var box = sceneEl.querySelector("#model");
    
    
    box.setAttribute("animation-mixer", {clip: 'greeting'});
  });
  
  // document
  //  .querySelector("#yellowbutton")
  //  .addEventListener("click", function () {
  //    var sceneEl = document.querySelector("a-scene");
  //    sceneEl.querySelector("#model").setAttribute("animation-mixer", {clip: "happy1"});
  //  });
    
};

