let interval;
let clockDisplay = document.querySelector("#MyClockDisplay");

const showtime = () => {
  const currentDate = new Date();
  let display = "";

  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  display = `${hours}:${minutes}:${seconds}`;
  clockDisplay.innerHTML = display;
  //console.log(display);
};

interval = setInterval(showtime, 1000);
