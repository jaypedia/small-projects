const number = Number(prompt('How many people?'));
const $input = document.querySelector('input');
const $button = document.querySelector('button.enter');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order');
const $participant = document.querySelector('.participant');

let word;
let newWord;

const onClickButton = () => {
  if (!word) {
    word = newWord;
    $word.textContent = word;
    $input.value = '';
    $input.focus();
    $order.textContent =
      +$order.textContent + 1 > number ? 1 : +$order.textContent + 1;
  } else {
    if (word[word.length - 1] === newWord[0]) {
      word = newWord;
      $word.textContent = word;
      $input.value = '';
      $input.focus();
      $order.textContent =
        +$order.textContent + 1 > number ? 1 : +$order.textContent + 1;
    } else {
      $participant.textContent += ' Failed!';
      $participant.style.color = 'red';
      $word.style.color = 'red';
    }
  }
};

const onInput = e => {
  newWord = e.target.value;
};

$input.addEventListener('input', onInput);

$button.addEventListener('click', onClickButton);
