let firstNum;
let secondNum;
let operator;
let displayValue = document.querySelector("div > .screen > #dpValue");
console.log(displayValue.innerText);

let btnNumbers = document.querySelectorAll(".numButton");
btnNumbers.forEach((element) => {
  element.addEventListener("click", () => {
    displayValue.innerText = element.innerText;
    firstNum = +displayValue.innerText;
  });
});

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

console.log(add(2, 3));

function operate(a, b, op) {
  switch (op) {
    case "+":
      console.log(add(a, b));
      break;
    case "-":
      subtract(a, b);
      break;
    case "*":
      multiply(a, b);
      break;
    case "/":
      divide(a, b);
      break;
    default:
      break;
  }
}
