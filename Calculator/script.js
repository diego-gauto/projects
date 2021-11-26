//capturar los objetos
let display = document.querySelector(".input");
const numbersButtons = document.querySelectorAll(".numbers div");
const operatorsButtons = document.querySelectorAll(".operators div");
const clearButton = document.querySelector("#clear");
const resultButton = document.querySelector(".equal");

let hasComa = false;
let hasNumber = true;
display.innerHTML = "0";
let lastCharacter = "0";

// reinicia la caluladora
const clear = () => {
  display.innerHTML = "0";
  hasComa = false;
  hasNumber = true;
  lastCharacter = "0";
};

//funcion calcular resultado
resultButton.addEventListener(
  "click",
  function () {
    if (hasNumber) {
      // this is the string that we will be processing eg. -10+26+33-56*34/23
      var inputString = input.innerHTML;

      // forming an array of numbers. eg for above string it will be: numbers = ["10", "26", "33", "56", "34", "23"]
      var numbers = inputString.split(/\+|\-|\×|\÷/g);

      // forming an array of operators. for above string it will be: operators = ["+", "+", "-", "*", "/"]
      // first we replace all the numbers and dot with empty string and then split
      var operators = inputString.replace(/[0-9]|\./g, "").split("");

      console.log(inputString);
      console.log(operators);
      console.log(numbers);
      console.log("----------------------------");

      // now we are looping through the array and doing one operation at a time.
      // first divide, then multiply, then subtraction and then addition
      // as we move we are alterning the original numbers and operators array
      // the final element remaining in the array will be the output

      var divide = operators.indexOf("÷");
      while (divide != -1) {
        numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
        operators.splice(divide, 1);
        divide = operators.indexOf("÷");
      }

      var multiply = operators.indexOf("×");
      while (multiply != -1) {
        numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
        operators.splice(multiply, 1);
        multiply = operators.indexOf("×");
      }

      var subtract = operators.indexOf("-");
      while (subtract != -1) {
        numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
        operators.splice(subtract, 1);
        subtract = operators.indexOf("-");
      }

      var add = operators.indexOf("+");
      while (add != -1) {
        // using parseFloat is necessary, otherwise it will result in string concatenation :)
        numbers.splice(
          add,
          2,
          parseFloat(numbers[add]) + parseFloat(numbers[add + 1])
        );
        operators.splice(add, 1);
        add = operators.indexOf("+");
      }

      input.innerHTML = numbers[0]; // displaying the output
    }
  },
  false
);

//agregar evento click a los numeros
for (i = 0; i < numbersButtons.length; i++) {
  numbersButtons[i].addEventListener(
    "click",
    function (e) {
      const buttonPressed = e.target.innerHTML;
      if (buttonPressed == ".")
        if (!hasComa && hasNumber) {
          display.innerHTML += ".";
          hasComa = true;
          lastCharacter = ".";
          hasNumber = false;
        } else {
        }
      else {
        if (display.innerHTML == "0") display.innerHTML = buttonPressed;
        else {
          display.innerHTML += buttonPressed;
        }

        lastCharacter = buttonPressed;
        hasNumber = true;
      }
    },

    false
  );
}

//agregar evento click a los operadores

for (i = 0; i < operatorsButtons.length; i++) {
  operatorsButtons[i].addEventListener(
    "click",
    function (e) {
      const operatorPressed = e.target.innerHTML;
      if (hasNumber) {
        display.innerHTML += operatorPressed;
        lastCharacter = operatorPressed;
        hasNumber = false;
        hasComa = false;
      }
    },
    false
  );
}

//agregar evento click a clear
clearButton.addEventListener("click", clear, false);
