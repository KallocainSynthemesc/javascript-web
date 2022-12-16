canvasApp();

function canvasApp() {
  var theCanvas = document.getElementById("canvasOne");
  var context = theCanvas.getContext("2d");

  function drawScreen() {
    context.beginPath();
    context.arc(400, 250, 200, 0, 2 * Math.PI);
    context.stroke();
    context.beginPath();

    context.beginPath();
    context.arc(320, 200, 30, 0, 2 * Math.PI);
    context.stroke();
    context.beginPath();

    context.beginPath();
    context.arc(320, 200, 5, 0, 2 * Math.PI);
    context.stroke();
    context.beginPath();

    context.beginPath();
    context.arc(480, 200, 30, 0, 2 * Math.PI);
    context.stroke();
    context.beginPath();

    context.beginPath();
    context.arc(480, 200, 5, 0, 2 * Math.PI);
    context.stroke();
    context.beginPath();

    context.beginPath();
    context.arc(400, 280, 100, (Math.PI / 180) * 20, (Math.PI / 180) * 160);
    context.stroke();
    context.beginPath();
  }
  drawScreen();
}
