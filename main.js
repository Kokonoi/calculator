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
    firstNum = displayValue.innerText;
  } else {
    if (operator !== undefined) {
      secondNum = secondNum.slice(0, -1);
    }
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
    } else if (
      displayValue.innerText.includes("+") ||
      displayValue.innerText.includes("-") ||
      displayValue.innerText.includes("/") ||
      displayValue.innerText.includes("*")
    ) {
      if (
        displayValue.innerText.includes("/") ||
        displayValue.innerText.includes("*")
      ) {
        operate(+firstNum, +secondNum, operator);
        displayValue.innerText += element.innerText;
        operator = element.innerText;
      } else {
        operate(+firstNum, +secondNum, operator);
        displayValue.innerText += element.innerText;
        operator = element.innerText;
      }
    } else {
      displayValue.innerText += element.innerText;
      operator = element.innerText;
    }
  });
});

calcBtn.addEventListener("click", () => {
  displayValue.innerText = operate(+firstNum, +secondNum, operator);
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
      firstNum = add(a, b);
      secondNum = "";
      operator = undefined;
      return +firstNum;
    case "-":
      firstNum = subtract(a, b);
      secondNum = "";
      operator = undefined;
      return +firstNum;
    case "*":
      firstNum = multiply(a, b);
      secondNum = "";
      operator = undefined;
      return +firstNum;
    case "/":
      firstNum = divide(a, b);
      secondNum = "";
      operator = undefined;
      return +firstNum;
    default:
      break;
  }
}
