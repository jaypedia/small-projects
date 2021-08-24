import PopUp from './popup.js';
import Field from './field.js';
import * as sound from './sound.js';

const playBtn = document.querySelector('.game__button');
const timerIndicator = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');

const CARROT_COUNT = 20;
const BUG_COUNT = 20;
const GAME_DURATION_SEC = 20;

let started = false;
let timer;
let score = 0;

const gameFinishBanner = new PopUp();
gameFinishBanner.setClickListener(() => {
  startGame();
});

playBtn.addEventListener('click', () => {
  if (started) {
    stopGame();
  } else {
    startGame();
  }
});

const gameField = new Field(CARROT_COUNT, BUG_COUNT);
gameField.setClickListener(onItemClick);

function onItemClick(item) {
  if (!started) {
    return;
  }

  if (item === 'carrot') {
    score++;
    updateScoreBoard();
    if (score === CARROT_COUNT) {
      finishGame(true);
    }
  } else if (item === 'bug') {
    finishGame(false);
  }
}

function startGame() {
  started = true;
  initGame();
  showStopButton();
  startGameTimer();
  sound.playBackground();
}

function stopGame() {
  started = false;
  stopGameTimer();
  gameFinishBanner.showWithText('REPLAY❓');
  hideGameButton();
  sound.playAlertSound();
  sound.stopBackground();
}

function showStopButton() {
  playBtn.innerHTML = '<i class="fas fa-stop"></i>';
  playBtn.style.visibility = 'visible';
}

function initGame() {
  score = 0;
  gameScore.innerHTML = CARROT_COUNT;
  gameField.init();
}

function finishGame(win) {
  started = false;
  hideGameButton();
  if (win) {
    sound.playWinSound();
  } else {
    sound.playBugSound();
  }
  stopGameTimer();
  sound.stopBackground();
  gameFinishBanner.showWithText(win ? 'YOU WON🎉' : 'YOU LOST💩');
}

function hideGameButton() {
  playBtn.style.visibility = 'hidden';
}

function startGameTimer() {
  let remainingTimeSec = GAME_DURATION_SEC;
  updateTimerText(remainingTimeSec);
  timer = setInterval(() => {
    if (remainingTimeSec <= 0) {
      clearInterval(timer);
      finishGame(score === CARROT_COUNT);
      return;
    }
    updateTimerText(--remainingTimeSec);
  }, 1000);
}

function stopGameTimer() {
  clearInterval(timer);
}

function updateTimerText(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timerIndicator.innerHTML = `${minutes}:${seconds}`;
}

function updateScoreBoard() {
  gameScore.innerHTML = CARROT_COUNT - score;
}
