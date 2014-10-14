var shell = require("mesh-viewer")();
var mesh;

shell.camera.lookAt([0, 3, 40], [0, 3, 0], [0, 1, 0]);

shell.on("viewer-init", function() {
  mesh = shell.createMesh(require("teapot"));
});

shell.on("gl-render", function() {
  mesh.draw();
});
