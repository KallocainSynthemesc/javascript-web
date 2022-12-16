canvasApp();

function canvasApp() {
  var theCanvas = document.getElementById("canvasOne");
  var context = theCanvas.getContext("2d");

  function drawScreen() {
    context.strokeStyle = "black";
    context.lineWidth = 10;
    context.lineCap = 'square';
    context.beginPath();
    context.moveTo(20, 0);
    context.lineTo(100, 0);
    context.stroke();
    context.closePath();
  }
  drawScreen();
}