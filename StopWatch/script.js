let actualSeconds = document.querySelector("#seconds");
let actualTens = document.querySelector("#tens");

let startButton = document.querySelector("#button-start");
let stoptButton = document.querySelector("#button-stop");
let resetButton = document.querySelector("#button-reset");

let interval;
let tens = 0;
let seconds = 0;

const start = () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
};

const stop = () => {
  clearInterval(interval);
};

const reset = () => {
  clearInterval(interval);
  tens = 0;
  seconds = 0;
  actualSeconds.innerHTML = "00";
  actualTens.innerHTML = "00";
};

const startTimer = () => {
  let temporaryTens;
  let temporarySeconds;
  tens++;

  if (tens <= 9) temporaryTens = "0" + tens;
  if (tens > 9) temporaryTens = "" + tens;
  if (tens > 99) {
    temporaryTens = "00";
    tens = 0;
    seconds++;
    if (seconds <= 9) temporarySeconds = "0" + seconds;
    if (seconds > 9) temporarySeconds = seconds;
    actualSeconds.innerHTML = temporarySeconds;
  }
  actualTens.innerHTML = temporaryTens;
};

startButton.addEventListener("click", start, false);

stoptButton.addEventListener("click", stop, false);

resetButton.addEventListener("click", reset, false);
