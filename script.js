const buttons = document.querySelectorAll(".btn-number, .btn-operator");
const display = document.querySelector(".display");
const equals = document.querySelector(".btn-equals");
const clear = document.querySelector(".btn-clear");

let displayData = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.getAttribute("data-num");
    displayData += buttonValue;
    display.textContent = displayData;
  });
});

equals.addEventListener("click", () => {
  displayData = eval(displayData);
  display.textContent = displayData;
});

clear.addEventListener("click", () => {
  displayData = "";
  display.textContent = displayData;
});
