function getRandomballs() {
  // 1부터 45까지 채워진 배열 생성
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);

  // Fisher-Yates Shuffle Algorithm : 배열의 모든 요소를 무작위로 섞기
  const shuffle = [];

  // 이 경우에는 for문보다는 while문을 쓰는 것이 편리
  // splice를 통해 candidate.length가 -1씩 감소하기 때문
  while (candidate.length > 0) {
    const random = Math.floor(Math.random() * candidate.length); // 무작위 인덱스 뽑기
    const splicedArr = candidate.splice(random, 1); // 그 랜덤 인덱스에 해당하는 값 찾기 - splice 이용
    const value = splicedArr[0]; // 배열에 들어 있는 값 꺼내기
    shuffle.push(value);
    // splice 후에는 원본 배열인 candidate의 원소가 1이 줄어듦
    // candidate의 원소가 0이 될 때까지 반복문을 돌면서 랜덤으로 숫자가 들어간 shuffle 배열을 완성해 나간다.
  }
  return shuffle;
}

// 7개의 공 뽑기 : 인덱스 0부터 6까지 slice를 하면 랜덤 번호가 들어있게 된다.
function getWinBalls() {
  const winBalls = getRandomballs()
    .slice(0, 7)
    .sort((a, b) => a - b);
  return winBalls;
}

// shuffle 배열 안에 있는 요소들을 앞에 있는 것부터 차례대로
function startGame() {
  const winBalls = getWinBalls();
  console.log(winBalls);

  // splice 때문에 array의 길이가 변경되므로 length를 변수에 저장
  const len = winBalls.length;
  for (let i = 0; i < len; i++) {
    const resultBallArr = winBalls.splice(0, 1);
    console.log(resultBallArr);

    setTimeout(() => {
      if (i === 6) {
        createBall(bonus, resultBallArr);
      } else {
        createBall(result, resultBallArr);
      }
    }, 1000 * i);
  }
}

function createBall(place, resultBallArr) {
  const ball = document.createElement('span');
  const ballNumber = resultBallArr[0];
  ball.className = 'ball';
  ball.innerHTML = ballNumber;
  paintBall(ballNumber, ball);
  place.appendChild(ball);
}

function paintBall(ballNumber, ball) {
  if (ballNumber < 10) {
    ball.style.backgroundColor = 'red';
  } else if (ballNumber < 20) {
    ball.style.backgroundColor = 'yellow';
  } else if (ballNumber < 30) {
    ball.style.backgroundColor = 'green';
    ball.style.color = 'white';
  } else if (ballNumber < 40) {
    ball.style.backgroundColor = 'blue';
    ball.style.color = 'white';
  } else {
    ball.style.backgroundColor = 'pink';
  }
}

const result = document.querySelector('.result');
const bonus = document.querySelector('.bonus');
const startBtn = document.querySelector('.start-button');
const resetBtn = document.querySelector('.reset-button');

startBtn.addEventListener('click', () => {
  startGame();
});

/*
replayBtn.addEventListener('click', () => {
  result.remove();
  bonus.remove();
});
*/
