const $form = document.querySelector('form');
const $input = document.querySelector('input');
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
