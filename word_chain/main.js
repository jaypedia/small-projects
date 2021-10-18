const $input = document.querySelector('input');
const $button = document.querySelector('button.enter');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order');
const $participant = document.querySelector('.participant');
const $startBtn = document.querySelector('.start-btn');

let word;
let newWord;

function startGame() {
  const number = Number(prompt('How many people?'));
  return number;
}

function onClick(number) {
  if (!word || word[word.length - 1] === newWord[0]) {
    word = newWord;
    $word.textContent = word;
    $order.textContent =
      +$order.textContent + 1 > number ? 1 : +$order.textContent + 1;
  } else {
    $participant.textContent += ' Failed!';
    $participant.style.color = 'red';
    $word.style.color = 'red';
  }
  $input.value = '';
  $input.focus();
}

function onInput(e) {
  newWord = e.target.value;
}

$startBtn.addEventListener('click', startGame);
$input.addEventListener('input', onInput);
$button.addEventListener('click', onClick);
