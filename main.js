let firstNum = "";
let secondNum = "";
let operator;
let operators = document.querySelectorAll(".operatorBtn");
let displayValue = document.querySelector("div > .screen > #dpValue");
let delBtn = document.getElementById("del");
let clBtn = document.getElementById("cl");
let btnNumbers = document.querySelectorAll(".numButton");
let calcBtn = document.querySelector(".calculate");

setFirst();

delBtn.addEventListener("click", () => {
  if (displayValue.innerText.length == 1) {
    displayValue.innerText = "0";
  } else {
    displayValue.innerText = displayValue.innerText.slice(0, -1);
    firstNum = displayValue.innerText;
  }
});

clBtn.addEventListener("click", () => {
  firstNum = "";
  secondNum = "";
  displayValue.innerText = "0";
});

function setFirst() {
  btnNumbers.forEach((element) => {
    element.addEventListener("click", () => {
      if (displayValue.innerText == "0") {
        displayValue.innerText = element.innerText;
        firstNum += element.innerText;
      } else if (operator == undefined) {
        displayValue.innerText += element.innerText;
        firstNum += element.innerText;
      } else {
        displayValue.innerText += element.innerText;
        secondNum += element.innerText;
      }
    });
  });
}

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

// calcBtn.addEventListener("click", () => {
//   operate(firstNum + operator);
// });

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
