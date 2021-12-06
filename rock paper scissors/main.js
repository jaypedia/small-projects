const $computer = document.querySelector('.computer');
const $btnContainer = document.querySelector('.btn-container');
const $score = document.querySelector('.score');
const $rock = document.querySelector('.rock');
const $scissors = document.querySelector('.scissors');
const $paper = document.querySelector('.paper');
const $mention = document.querySelector('.mention');
const $result = document.querySelector('.result');

const IMG_URL = './rps.png';

const rpsX = {
  rock: '-220px',
  paper: '-440px',
  scissors: '0',
};

const scoreTable = {
  rock: 0,
  paper: -1,
  scissors: 1,
};

let computerChoice = 'rock';

function changeCompterChoice() {
  if (computerChoice === 'rock') {
    computerChoice = 'scissors';
  } else if (computerChoice === 'scissors') {
    computerChoice = 'paper';
  } else if (computerChoice === 'paper') {
    computerChoice = 'rock';
  }

  $computer.style.background = `url(${IMG_URL}) ${rpsX[computerChoice]} 0`;
  $computer.style.backgroundSize = `auto 200px`;
}

let intervalId = setInterval(changeCompterChoice, 50);
let clickable = true;

const clickBtn = () => {
  if (clickable) {
    clearInterval(intervalId);
    clickable = false;
    setTimeout(() => {
      clickable = true;
      intervalId = setInterval(changeCompterChoice, 50);
    }, 1000);
  }
};

// 컴퓨터의 선택과 나의 선택을 비교하여 점수를 계산해주는 함수
let score = 0;
let comWinCount = 0;
let myWinCount = 0;
const calculateScore = e => {
  const myChoice = e.target.className;

  const comScore = scoreTable[computerChoice];
  const myScore = scoreTable[myChoice];

  const diff = myScore - comScore;
  if (diff === 0) {
    $mention.textContent = '비김!';
  } else if ([-1, 2].includes(diff)) {
    $mention.textContent = '내가 이겼다!';
    score++;
    myWinCount++;
  } else if ([1, -2].includes(diff)) {
    $mention.textContent = '내가 졌다!';
    score--;
    comWinCount++;
  }
  $score.textContent = score;
};

function showResult() {
  if (comWinCount >= 2) {
    $result.textContent = '결과 : 컴퓨터 승!';
  } else if (myWinCount >= 2) {
    $result.textContent = '결과 : 나 승!';
  }
}

// 버튼을 클릭하면 1초간 정지했다가 다시 돌아가도록 하기
$btnContainer.addEventListener('click', e => {
  // console.log(e.target.className);
  clickBtn();
  calculateScore(e);
  showResult();
});
