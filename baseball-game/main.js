const $form = document.querySelector('form');
const $input = document.querySelector('input');
const $tryBtn = document.querySelector('.try-button');
const $logs = document.querySelector('.logs');

const NUMBER = 4;

// 무작위로 1~9 사이에서 중복되지 않게 숫자 4개 뽑기
function getRandomNumbers() {
  const answerArr = [];

  while (answerArr.length < NUMBER) {
    let randomNumber = Math.floor(Math.random() * 9 + 1);

    if (answerArr[answerArr.length - 1] !== randomNumber) {
      answerArr.push(randomNumber);
    }
  }
  return answerArr;
}

/*
// Another way to get random numbers - use index
function getRandomNumbers2() {
  const numbers = [];
  for (let i = 0; i < 9; i++) {
    numbers.push(i + 1);
  }

  const answerArr = [];
  // 4번만 반복
  // Math.random으로 얻은 난수를 index로 이용
  // 중복되지 않게 splice 사용
  // splice 이용으로 배열의 길이가 1씩 감소하기 때문에 Math.random에 숫자를 곱해줄 때 i만큼 빼주기 
  for (let i = 0; i < NUMBER; i++) {
    const index = Math.floor(Math.random() * (numbers.length - i));
    answerArr.push(numbers[index]);
    numbers.splice(index, 1);
  }
  return answerArr;
}
console.log(getRandomNumbers2());
*/

getRandomNumbers();

const tries = [];
// 사용자의 입력값이 올바른지 검사해주는 함수(중복되지 않은 숫자 4개)
function checkUserInput() {
  const userInput = $input.value;
  //   checkCount(userInput);
  //   checkNumber(userInput);
  //   checkDuplicate(userInput);

  // alert의 반환값은 undefined
  if (userInput.length !== 4) {
    $input.value = '';
    return alert('숫자 4자리를 입력해 주세요.');
  }
  if (new Set(userInput).size !== 4) {
    $input.value = '';
    return alert('중복되지 않은 숫자들을 입력해 주세요.');
  }
  if (tries.includes(userInput)) {
    $input.value = '';
    return alert('이미 시도한 숫자네요.');
  }
  return true;
}

/* 
function checkCount(userInput) {
  if (userInput.length !== 4) {
    alert('Please enter 4 numbers.');
    return;
  }
}

function checkNumber(userInput) {
  if (isNaN(Number(userInput))) {
    alert('Please enter only numbers.');
    return;
  }
}

function checkDuplicate(userInput) {
  const userInputArr = userInput.split('');
  let isDuplicate = false;

  for (let i = 0; i < userInputArr.length; i++) {
    const currentElement = userInputArr[i];
    // 내부 반복문에서는 첫 번째 반복문에서 선택된 원소 이후의 값을 순차적으로 순회
    for (let j = i + 1; j < userInputArr.length; j++) {
      // 첫 번째 반복문에서 선택된 원소와 두 번째 반복문에서 선택된 원소의 값을 비교
      // 동일한 값이 있으면 true로 설정 후 반복문 중단
      if (currentElement === userInputArr[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (isDuplicate) {
      alert('Numbers should not be duplicated');
      return;
    }
  }
}
*/

$form.addEventListener('submit', e => {
  e.preventDefault();
  if (checkUserInput()) {
    tries.push($input.value);
    console.log(tries);
    $input.value = '';
  }
});

$tryBtn.addEventListener('click', e => {
  e.preventDefault();
  if (checkUserInput()) {
    tries.push($input.value);
    console.log(tries);
    $input.value = '';
  }
});
