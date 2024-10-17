function addCustomControls(map) {
  var debugDiv = L.DomUtil.create('div', 'debug-info');
  debugDiv.style.position = 'absolute';
  debugDiv.style.top = '10px';
  debugDiv.style.left = '10px';
  debugDiv.style.backgroundColor = 'white';
  debugDiv.style.padding = '10px';
  debugDiv.style.zIndex = '1000';
  debugDiv.innerHTML = 'Debug Info';
  map.getContainer().appendChild(debugDiv);

  function updateDebug() {
    var zoom = map.getZoom();
    debugDiv.innerHTML = 'Current Zoom: ' + zoom;
  }

  map.on('zoomend', updateDebug);
  updateDebug();

  L.control({position: 'topright'})
    .onAdd = function(map) {
      var div = L.DomUtil.create('div', 'info legend');
      div.innerHTML = 'Test Control';
      return div;
    };
  map.addControl(L.control({position: 'topright'}));
}