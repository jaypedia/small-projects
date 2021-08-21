const field = document.querySelector('.game__field');
const playBtn = document.querySelector('.game__button');
const replayBtn = document.querySelector('.pop-up__refresh');
const timer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');
const popUp = document.querySelector('.pop-up');
const message = document.querySelector('.pop-up__message');

const alertSound = new Audio('./sound/alert.wav');
const carrotSound = new Audio('./sound/carrot_pull.mp3');
const bugSound = new Audio('./sound/bug_pull.mp3');
const bgSound = new Audio('./sound/bg.mp3');
const winSound = new Audio('./sound/game_win.mp3');

const ITEM_SIZE = 100;
const CARROT_COUNT = 20;
const BUG_COUNT = 20;
const GAME_DURATION_SEC = 20;

const fieldRect = field.getBoundingClientRect();

let interval;
let seconds = GAME_DURATION_SEC;
let score = 0;

function initGame() {
  playSound(bgSound);

  playBtn.removeEventListener('click', initGame);
  playBtn.innerHTML = '<i class="fas fa-stop"></i>';
  addItem('carrot', CARROT_COUNT, 'img/carrot.png');
  addItem('bug', BUG_COUNT, 'img/bug.png');
  gameScore.innerHTML = CARROT_COUNT;
  countDown();
  interval = setInterval(countDown, 1000);

  playBtn.addEventListener('click', stopGame);
  field.addEventListener('click', startGame);
}

function startGame(event) {
  if (event.target.className === 'carrot') {
    field.removeChild(event.target);
    ++score;
    gameScore.innerHTML = CARROT_COUNT - score;
    playSound(carrotSound);
  } else if (event.target.className === 'bug') {
    message.textContent = 'You Lost💩';
    playBtn.style.visibility = 'hidden';
    popUp.classList.remove('pop-up--hide');
    clearInterval(interval);
    stopSound(bgSound);
    playSound(bugSound);
  } else if (score.textContent === '0') {
    clearInterval(interval);
    playBtn.style.visibility = 'hidden';
    popUp.classList.remove('pop-up--hide');
    message.textContent = 'You Won🎉';
    stopSound(bgSound);
    playSound(winSound);
  }
}

function stopGame() {
  message.textContent = 'replay?🐰';
  playBtn.style.visibility = 'hidden';
  popUp.classList.remove('pop-up--hide');
  clearInterval(interval);
  field.removeEventListener('click', startGame);
  stopSound(bgSound);
  playSound(alertSound);
}

function replayGame() {
  seconds = 20;
  countDown();
  clearInterval(interval);
  popUp.classList.add('pop-up--hide');
  playBtn.style.visibility = 'visible';
  interval = setInterval(countDown, 1000);
  field.innerHTML = '';
  gameScore.innerHTML = CARROT_COUNT;
  score = 0;
  addItem('carrot', CARROT_COUNT, 'img/carrot.png');
  addItem('bug', BUG_COUNT, 'img/bug.png');
  field.addEventListener('click', startGame);
  playSound(bgSound);
}

function playSound(sound) {
  sound.play();
  sound.currentTime = 0;
}

function stopSound(sound) {
  sound.pause();
  sound.currentTime = 0;
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

function randomNumber(num) {
  return Math.random() * num;
}

playBtn.addEventListener('click', initGame);
replayBtn.addEventListener('click', replayGame);
