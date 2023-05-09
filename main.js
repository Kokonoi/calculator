let firstNum = "";
let secondNum = "";
let operator;
let operators = document.querySelectorAll(".operatorBtn");
let dpVal = document.querySelector("div > .screen > #dpValue");
let delBtn = document.getElementById("del");
let clBtn = document.getElementById("cl");
let btnNumbers = document.querySelectorAll(".numButton");
let calcBtn = document.querySelector(".calculate");

setFirst();

delBtn.addEventListener("click", () => {
  if (dpVal.innerText.length == 1) {
    dpVal.innerText = "0";
    firstNum = dpVal.innerText;
  } else {
    if (operator !== undefined) {
      secondNum = secondNum.slice(0, -1);
    }
    dpVal.innerText = dpVal.innerText.slice(0, -1);
    firstNum = dpVal.innerText;
  }
});

clBtn.addEventListener("click", () => {
  firstNum = "";
  secondNum = "";
  dpVal.innerText = "0";
});

function setFirst() {
  btnNumbers.forEach((element) => {
    element.addEventListener("click", () => {
      if (dpVal.innerText == "0") {
        dpVal.innerText = element.innerText;
        firstNum += element.innerText;
      } else if (operator == undefined) {
        dpVal.innerText += element.innerText;
        firstNum += element.innerText;
      } else {
        dpVal.innerText += element.innerText;
        secondNum += element.innerText;
      }
    });
  });
}

operators.forEach((element) => {
  element.addEventListener("click", () => {
    let lastEle = dpVal.innerText.at(-1);
    if (lastEle == "+" || lastEle == "-" || lastEle == "/" || lastEle == "*") {
      dpVal.innerText = dpVal.innerText.slice(0, -1);
      dpVal.innerText += element.innerText;
      operator = element.innerText;
    } else if (
      dpVal.innerText.includes("+") ||
      dpVal.innerText.includes("-") ||
      dpVal.innerText.includes("/") ||
      dpVal.innerText.includes("*")
    ) {
      if (dpVal.innerText.includes("/") || dpVal.innerText.includes("*")) {
        operate(+firstNum, +secondNum, operator);
        dpVal.innerText += element.innerText;
        operator = element.innerText;
      } else {
        operate(+firstNum, +secondNum, operator);
        dpVal.innerText += element.innerText;
        operator = element.innerText;
      }
    } else {
      dpVal.innerText += element.innerText;
      operator = element.innerText;
    }
  });
});

calcBtn.addEventListener("click", () => {
  dpVal.innerText = operate(+firstNum, +secondNum, operator);
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
