canvasApp();

function canvasApp() {
  var theCanvas = document.getElementById("canvasOne");
  var context = theCanvas.getContext("2d");

  function drawScreen() {
    context.lineWidth = 10;

    ["round", "bevel", "miter"].forEach((join, i) => {
      context.lineJoin = join;
      context.beginPath();
      context.moveTo(-5, 5 + i * 40);
      context.lineTo(35, 45 + i * 40);
      context.lineTo(75, 5 + i * 40);
      context.lineTo(115, 45 + i * 40);
      context.lineTo(155, 5 + i * 40);
      context.stroke();
    });
  }
  drawScreen();
}