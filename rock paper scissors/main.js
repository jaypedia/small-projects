const $computer = document.querySelector('.computer');
const $btnContainer = document.querySelector('.btn-container');
const $score = document.querySelector('.score');
const $rock = document.querySelector('.rock');
const $scissors = document.querySelector('.scissors');
const $paper = document.querySelector('.paper');

const IMG_URL = './rps.png';

const rpsX = {
  rock: '-220px',
  paper: '-440px',
  scissors: '0',
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

// 버튼을 클릭하면 1초간 정지했다가 다시 돌아가도록 하기
$btnContainer.addEventListener('click', e => {
  console.log(e.target.className);
  clickBtn();
});
