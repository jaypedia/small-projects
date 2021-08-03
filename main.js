const reset = document.querySelector('.button #reset');

function handleReset(event) {
  const answer = confirm('Do you want to reset this form?');
  if (answer === false) {
    event.preventDefault();
  }
}

reset.addEventListener('click', handleReset);
