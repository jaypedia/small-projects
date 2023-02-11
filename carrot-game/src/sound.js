const alertSound = new Audio('./sound/alert.wav');
const carrotSound = new Audio('./sound/carrot_pull.mp3');
const failSound = new Audio('./sound/bug_pull.mp3');
const bgSound = new Audio('./sound/bg.mp3');
const winSound = new Audio('./sound/game_win.mp3');

export function playCarrot() {
  playSound(carrotSound);
}

export function playAlert() {
  playSound(alertSound);
}

export function playLost() {
  playSound(failSound);
}

export function playBackground() {
  playSound(bgSound);
}

export function stopBackground() {
  bgSound.pause();
}

export function playWin() {
  playSound(winSound);
}

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}
