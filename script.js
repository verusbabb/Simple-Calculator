//Access key DOM elements
const buttons = document.querySelectorAll(".btn-number, .btn-operator");
const display = document.querySelector(".display");
const equals = document.querySelector(".btn-equals");
const clear = document.querySelector(".btn-clear");

//initialize display to empty
let displayData = "";

//listen for number and operator buttons
//and show them in the display
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.getAttribute("data-num");
    displayData += buttonValue;
    display.textContent = displayData;
  });
});

//listen for equals and then evaluate the javascript in the display
equals.addEventListener("click", () => {
  displayData = eval(displayData);
  display.textContent = displayData;
});

//reset the display when clear is clicked
clear.addEventListener("click", () => {
  displayData = "";
  display.textContent = displayData;
});
