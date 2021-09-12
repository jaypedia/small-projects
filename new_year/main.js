const backBtn = document.querySelector('.btn-back');
const shareBtn = document.querySelector('.btn-share');
const animalName = document.querySelector('.animal-name');
const resultTitle = document.querySelector('.result-title');

const url = window.location.href;

function backToMain() {
  const newUrl = url.split('result.html')[0] + 'index.html';
  window.location.href = newUrl;
}

function shareAddress() {
  const textArea = document.createElement('textarea');
  document.body.appendChild(textArea);
  textArea.value = url;
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  alert('Copied!');
}

function loadItems() {
  let animals = [
    '쥐띠',
    '소띠',
    '호랑이띠',
    '토끼띠',
    '용띠',
    '뱀띠',
    '말띠',
    '양띠',
    '원숭이띠',
    '닭띠',
    '개띠',
    '돼지띠',
  ];
  let year = getParameter('year') == '' ? 1 : getParameter('year');
  console.log(`year : ${year}`);
  let id = `rtan${year}`;
  let animal = animals[year - 1];
  document.getElementById(id).style.display = 'block';
  animalName.innerHTML = animal;
  animalName.style.backgroundImage = `url("https://new-year.spartacodingclub.kr/images/yearS${year}.png")`;
  resultTitle.innerHTML = `2021년 ${animal}의 운세!`;
}

function getParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  // console.log(`regex : ${regex}`); // /[\?&]year=([^&#]*)/
  let results = regex.exec(location.search);
  //console.log(results); // results : ['?year=7', '7', index: 0, input: '?year=7', groups: undefined]
  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

backBtn.addEventListener('click', backToMain);
shareBtn.addEventListener('click', shareAddress);
document.addEventListener('DOMContentLoaded', loadItems);
