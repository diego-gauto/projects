let colors = [];
let pickedColour;
let colourDisplay = document.querySelector("#color-display");
let message = document.querySelector("#message");
let squares = document.querySelectorAll(".square");
let resetButton = document.querySelector("#reset");
let header = document.querySelector("h1");

function generarNumero(numero) {
  return (Math.random() * numero).toFixed(0);
}

function colorRGB() {
  let coolor =
    "(" +
    generarNumero(255) +
    ", " +
    generarNumero(255) +
    ", " +
    generarNumero(255) +
    ")";
  return "rgb" + coolor;
}

const getColors = () => {
  let ramdomColours = [];
  for (i = 0; i < squares.length; i++) {
    ramdomColours.push(colorRGB());
  }
  return ramdomColours;
};

const chooseColor = () => {
  let ramdomIndex = generarNumero(5);
  return ramdomIndex;
};
const reset = () => {
  colors = getColors();
  pickedColour = colors[chooseColor()];
  colourDisplay.innerHTML = pickedColour;
  message.innerHTML = "";
  resetButton.innerHTML = "New Colors";
  header.style.backgroundColor = "#2c8e99";

  for (i = 0; i < squares.length; i++) {
    squares[i].style.display = "block";
    squares[i].style.backgroundColor = colors[i];
  }
};

const endGame = () => {
  resetButton.innerHTML = "Play again";
  message.innerHTML = "You Win";
  //console.log("dentro de endGame");
  for (i = 0; i < squares.length; i++) {
    squares[i].style.display = "block";
    squares[i].style.backgroundColor = pickedColour;
  }
  header.style.backgroundColor = pickedColour;
};

const init = () => {
  reset();

  resetButton.addEventListener("click", reset, false);
  for (i = 0; i < squares.length; i++) {
    squares[i].addEventListener(
      "click",
      function () {
        const clickedColor = this.style.backgroundColor;
        if (clickedColor == pickedColour) endGame();
        else {
          this.style.display = "block";
          this.style.backgroundColor = "#232323";
          message.innerHTML = "Try again";
        }
      },
      false
    );
  }
};

init();
