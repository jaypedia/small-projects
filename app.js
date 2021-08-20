const field = document.querySelector('.game__field');
const playBtn = document.querySelector('.game__button');
const timer = document.querySelector('.game__timer');
const score = document.querySelector('.game__score');
const popUp = document.querySelector('.pop-up');
const message = document.querySelector('.pop-up__message');
const replay = document.querySelector('.pop-up__refresh');

const img = field.querySelector('img');

const alert = new Audio('sound/alert.wav');
const carrotPull = new Audio('sound/carrot_pull.mp3');
const bugPull = new Audio('sound/bug_pull.mp3');
const bg = new Audio('sound/bg.mp3');
const gameWin = new Audio('sound/game_win.mp3');

const ITEM_SIZE = 100;
const CARROT_COUNT = 5;
const BUG_COUNT = 5;

const fieldRect = field.getBoundingClientRect();

let interval;

function initGame() {
  bg.play();

  playBtn.removeEventListener('click', initGame);
  playBtn.innerHTML = '<i class="fas fa-stop"></i>';
  addItem('carrot', CARROT_COUNT, 'img/carrot.png');
  addItem('bug', BUG_COUNT, 'img/bug.png');

  countDown();
  interval = setInterval(countDown, 1000);

  playBtn.addEventListener('click', stopGame);

  let number = 5;
  field.addEventListener('click', (event) => {
    if (event.target.className === 'carrot') {
      carrotPull.play();
      field.removeChild(event.target);
      score.innerHTML = --number;
    } else if (event.target.className === 'bug') {
      message.textContent = 'You Lost💩';
      playBtn.style.visibility = 'hidden';
      popUp.classList.remove('pop-up--hide');
      clearInterval(interval);
      bg.muted = true;
      bugPull.play();
    }
    if (score.textContent === '0') {
      bg.muted = true;
      gameWin.play();
      clearInterval(interval);
      playBtn.style.visibility = 'hidden';
      popUp.classList.remove('pop-up--hide');
      message.textContent = 'You Won🎉';
    }
  });
}

function stopGame() {
  bg.muted = true;
  alert.play();
  message.textContent = 'replay?🐰';
  playBtn.style.visibility = 'hidden';
  popUp.classList.remove('pop-up--hide');
  clearInterval(interval);
}

function replayGame() {
  seconds = 20;
  countDown();
  clearInterval(interval);
  popUp.classList.add('pop-up--hide');
  playBtn.style.visibility = '';
  interval = setInterval(countDown, 1000);
  bg.muted = false;
  bg.play();

  addItem('carrot', CARROT_COUNT, 'img/carrot.png');
  addItem('bug', BUG_COUNT, 'img/bug.png');
}

function addItem(className, count, imgPath) {
  const x2 = fieldRect.width - ITEM_SIZE;
  const y2 = fieldRect.height - ITEM_SIZE;
  for (let i = 0; i < count; i++) {
    const item = document.createElement('img');
    item.setAttribute('class', className);
    item.setAttribute('src', imgPath);
    item.style.position = 'absolute';
    const x = randomNumber(x2);
    const y = randomNumber(y2);
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    field.appendChild(item);
  }
}

function randomNumber(num) {
  return Math.random() * num;
}

let seconds = 20;
function countDown() {
  if (seconds == 1) {
    timer.innerHTML = '00:00';
    popUp.classList.remove('pop-up--hide');
    message.textContent = 'Time Over⏰';
    clearInterval(interval);
    bg.muted = true;
    bugPull.play();
    playBtn.style.visibility = 'hidden';
  } else {
    timer.innerHTML = `0:${seconds--}`;
  }
}

playBtn.addEventListener('click', initGame);
replay.addEventListener('click', replayGame);
