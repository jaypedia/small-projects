const number = Number(prompt('How many people?'));

if (number) {
  const $input = document.querySelector('input');
  const $button = document.querySelector('button.enter');
  const $word = document.querySelector('#word');
  const $order = document.querySelector('#order');

  let word;
  let newWord;

  function onInput(e) {
    newWord = e.target.value;
  }

  function onClick() {
    if (
      newWord.length === 3 &&
      (!word || word[word.length - 1] === newWord[0])
    ) {
      word = newWord;
      $word.textContent = word;
      const order = Number($order.textContent);
      $order.textContent = order + 1 > number ? 1 : order + 1;
    } else if (newWord.length !== 3) {
      alert('Check the number of the word.');
    } else if (word[word.length - 1] !== newWord[0]) {
      alert("The words don't match.");
    } else {
      alert('You Lose! Try again!');
    }
    $input.value = '';
    $input.focus();
  }

  $input.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
      onClick(event);
    }
  });
  $input.addEventListener('input', onInput);
  $button.addEventListener('click', onClick);
}
