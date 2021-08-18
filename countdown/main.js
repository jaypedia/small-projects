const start = document.querySelector('button.start');
const stop = document.querySelector('button.stop');
const count = document.querySelector('#count');
let seconds = 10;
let interval;

function countDown() {
  if (seconds == 0) {
    count.innerHTML = 'complete';
  } else {
    count.innerHTML = --seconds;
  }
}

start.addEventListener('click', () => {
  interval = setInterval(countDown, 1000);
});

stop.addEventListener('click', () => {
  clearInterval(interval);
});
