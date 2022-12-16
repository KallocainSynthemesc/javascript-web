var seconds = 0;
var tens = 0;
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");
var Interval;

buttonStart.addEventListener("click", start);
buttonStop.addEventListener("click", stop);
buttonReset.addEventListener("click", reset);

function start() {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
}

function stop() {
  clearInterval(Interval);
}

function reset() {
  clearInterval(Interval);
  tens = "00";
  seconds = "00";
  appendTens.textContent = tens;
  appendSeconds.textContent = seconds;
}

function startTimer() {
  tens++;

  if (tens <= 9) {
    appendTens.textContent = "0" + tens;
  }

  if (tens > 9) {
    appendTens.textContent = tens;
  }

  if (tens > 99) {
    console.log("seconds");
    seconds++;
    appendSeconds.textContent = "0" + seconds;
    tens = 0;
    appendTens.textContent = "0" + 0;
  }

  if (seconds > 9) {
    appendSeconds.textContent = seconds;
  }
}
