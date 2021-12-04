const numberBtns = document.querySelectorAll('.num');
const operatorBtns = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('.equal');
const clearBtn = document.querySelector('.clear');
const operatorDisplay = document.querySelector('#operator-display');
const resultDisplay = document.querySelector('#result-display');

let numOne = '';
let numTwo = '';
let operator = null;

function saveNumbers(number) {
  if (operator === null) {
    numOne = number;
  } else {
    numTwo = number;
  }
}

function displayNumber(number) {
  resultDisplay.value = number;
}

function makeNumOne(number) {
  numOne += number;
  return numOne;
}

function makeNumTwo(number) {
  numTwo += number;
  return numTwo;
}

function calculate(numOne, numTwo, operator) {
  numOne = Number(numOne);
  numTwo = Number(numTwo);
  switch (operator) {
    case '+':
      return numOne + numTwo;
    case '-':
      return numOne - numTwo;
    case '/':
      return numOne / numTwo;
    case 'x':
      return numOne * numTwo;
  }
}

function displayOperator(operator) {
  operatorDisplay.value = operator;
}

function clearDisplay() {
  resultDisplay.value = '';
  operatorDisplay.value = '';
}

function initCalculator() {
  numOne = '';
  numTwo = '';
  operator = null;
}

numberBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const btnNumber = btn.textContent;
    if (!operator) {
      const num = makeNumOne(btnNumber);
      saveNumbers(num);
      displayNumber(num);
    } else {
      const num = makeNumTwo(btnNumber);
      saveNumbers(num);
      displayNumber(num);
    }
  });
});

operatorBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (!numOne) {
      alert('숫자를 먼저 입력해 주세요.');
      return;
    }
    operator = btn.textContent;
    displayOperator(operator);
    if (numTwo) {
      const result = calculate(numOne, numTwo, operator);
      displayNumber(result);
      numOne = result;
      numTwo = '';
    }
  });
});

equalBtn.addEventListener('click', () => {
  if (!numOne || !numTwo || !operator) {
    alert('숫자나 연산자를 입력해야 계산할 수 있어요.');
    return;
  }
  const result = calculate(numOne, numTwo, operator);
  displayNumber(result);
  operator = null;
  displayOperator(operator);
  numOne = result;
  numTwo = '';
});

clearBtn.addEventListener('click', () => {
  clearDisplay();
  initCalculator();
});
