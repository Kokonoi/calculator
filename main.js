let firstNum;
let secondNum;
let operator;
let operators = document.querySelectorAll(".operatorBtn");
let displayValue = document.querySelector("div > .screen > #dpValue");
let delBtn = document.getElementById("del");
let clBtn = document.getElementById("cl");
let btnNumbers = document.querySelectorAll(".numButton");
let calcBtn = document.querySelector(".calculate");

delBtn.addEventListener("click", () => {
  if (displayValue.innerText.length == 1) {
    displayValue.innerText = "0";
  } else {
    displayValue.innerText = displayValue.innerText.slice(0, -1);
    firstNum = +displayValue.innerText;
  }
});

clBtn.addEventListener("click", () => {
  firstNum = 0;
  secondNum = 0;
  displayValue.innerText = "0";
});

btnNumbers.forEach((element) => {
  element.addEventListener("click", () => {
    if (displayValue.innerText == "0") {
      displayValue.innerText = "";
    }
    displayValue.innerText += element.innerText;
    firstNum = +displayValue.innerText;
  });
});

operators.forEach((element) => {
  element.addEventListener("click", () => {
    let lastEle = displayValue.innerText.at(-1);
    if (lastEle == "+" || lastEle == "-" || lastEle == "/" || lastEle == "*") {
      displayValue.innerText = displayValue.innerText.slice(0, -1);
      displayValue.innerText += element.innerText;
      operator = element.innerText;
    } else {
      displayValue.innerText += element.innerText;
      operator = element.innerText;
    }
  });
});

calcBtn.addEventListener("click", () => {
  operate(firstNum + operator);
});

//operating functions
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

function operate(a, b, op) {
  switch (op) {
    case "+":
      add(a, b);
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
