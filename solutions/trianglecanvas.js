canvasApp();

function canvasApp() {
  var theCanvas = document.getElementById("canvasOne");
  var context = theCanvas.getContext("2d");

  function drawScreen() {
    context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(100, 300);
    context.lineTo(300, 300);
    context.closePath();
    context.lineWidth = 10;
    context.strokeStyle = "black";
    context.stroke();
  }
  drawScreen();
}