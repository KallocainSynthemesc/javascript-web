canvasApp();

function canvasApp() {
  var theCanvas = document.getElementById("canvasOne");
  var context = theCanvas.getContext("2d");

  function drawScreen() {
    // Draw guides
    context.strokeStyle = '#09f';
    context.beginPath();
    context.moveTo(10, 10);
    context.lineTo(140, 10);
    context.moveTo(10, 140);
    context.lineTo(140, 140);
    context.stroke();

    // Draw lines
    context.strokeStyle = 'black';
    ['butt', 'round', 'square'].forEach((lineCap, i) => {
      context.lineWidth = 15;
      context.lineCap = lineCap;
      context.beginPath();
      context.moveTo(25 + i * 50, 10);
      context.lineTo(25 + i * 50, 140);
      context.stroke();
    });
  }
  drawScreen();
}