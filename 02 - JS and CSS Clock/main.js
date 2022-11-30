const secondHand = document.querySelector('.second-hand');

const minuteHand = document.querySelector('.minute-hand');

const hourHand = document.querySelector('.hour-hand');

function setDate() {
  // return the seconds, according to local time
  const now = new Date();
  const seconds = now.getSeconds();
  // return the degrees associated with each second
  const secondDegrees = (seconds / 60) * 360 + 90;
  // modify the transform rotation every second
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  // do the same for minutes
  const minutes = now.getMinutes();
  const minuteDegrees = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

  // do the same for hours
  var hours = now.getHours();
  // convert hours from 24-hour clock to 12-hour clock
  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12;
  }
  const hourDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  // remove transition when secondHand gets to 444 deg and re-apply transition when secondHand gets to 90 deg
  if (secondDegrees === 444 || secondDegrees === 90) {
    secondHand.style.transition = 'all 0s ease 0s';
  } else {
    secondHand.style.transition = 'all 0.05s cubic-bezier(0, 0, 0.52, 2.51) 0s';
  }
}

setInterval(setDate, 1000);
