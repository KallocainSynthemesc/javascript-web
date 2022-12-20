canvasApp();

function canvasApp() {
  var theCanvas = document.getElementById("canvasOne");
  var context = theCanvas.getContext("2d");
  const date = new Date();

  function drawScreen() {
    context.beginPath();
    context.arc(200, 200, 200, 0, 2 * Math.PI);
    context.stroke();
    context.beginPath();

    context.translate(200, 200);
    const degree = getDegreeFromHour(date.getHours());
    context.rotate((Math.PI / 180) * degree);
    context.translate(-200, -200);

    context.fillStyle = "red";
    context.fillRect(200, 200, 10, -150);

    context.resetTransform();
    context.translate(200, 200);
    const degree2 = getDegreeFromMinute(date.getMinutes());
    context.rotate((Math.PI / 180) * degree2);
    context.translate(-200, -200);

    context.fillStyle = "green";
    context.fillRect(200, 200, 10, -200);
  }
  drawScreen();

  function getDegreeFromHour(hours) {
    return hours * 15 * 2;
  }

  function getDegreeFromMinute(minute) {
    return minute * 6 * 2;
  }
}
