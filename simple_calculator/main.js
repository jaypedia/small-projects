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
    // 첫 번째 숫자가 -로 시작할 때(음수일 때)
    if (btn.textContent === '-' && numOne === '') {
      numOne += '-';
      displayNumber(numOne);
    }

    if (!numOne && btn.textContent !== '-') {
      alert('숫자를 먼저 입력해 주세요.');
      return;
    }

    // 첫 번째 숫자는 있는데(단 -가 아니어야 함), 두 번째 숫자가 없을 때
    if (numOne && numOne !== '-' && !numTwo) {
      operator = btn.textContent;
      displayOperator(operator);
      return;
    }

    // 연속 계산을 위한 로직
    // 연산자 버튼을 클릭했는데, numTwo가 있는 상황이라면
    if (numTwo) {
      // operator = btn.textContent;
      // displayOperator(operator);
      // 우선 계산을 해서 결과를 보여준다.
      const result = calculate(numOne, numTwo, operator);
      displayNumber(result);
      // numOne에 결과가 들어가고, numTwo는 비워 준다.(새로 입력 받아야 하니까)
      numOne = result;
      numTwo = '';
      operator = btn.textContent;
      displayOperator(operator);
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
