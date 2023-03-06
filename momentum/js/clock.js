const clock = document.querySelector('h2#clock');
const dateContainer = document.getElementById('date');

// Clock
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

//getClock();
setInterval(getClock, 0);

// Date
function getTime() {
  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth();
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const day = date.getDate();

  dateContainer.innerText = `${monthNames[month]} ${day}, ${year}`;
}

getTime();
