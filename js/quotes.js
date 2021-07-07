const quotes = [
  {
    quote: 'Big results require big ambitious.',
    author: 'Jay',
  },
  {
    quote:
      'Focus on your goals, not your fear. Focus like a laser beam on your goals.',
    author: 'Jay',
  },
  {
    quote: 'My ultimate goal is to be better today than yesterday.',
    author: 'Jay',
  },
  {
    quote: 'The easiest way to reach my goal is to never give up.',
    author: 'Jay',
  },
  {
    quote: 'Great things never came from comfort zones.',
    author: 'Jay',
  },
  {
    quote: 'What keeps me going is Goals.',
    author: 'Jay',
  },
  {
    quote: 'I am capable of amazing things.',
    author: 'Jay',
  },
  {
    quote:
      'Find out what you like doing best and get someone to pay you for doing it.',
    author: 'Jay',
  },
  {
    quote:
      "You're braver than you believe, and stronger than you seem, and smarter than you think.",
    author: 'Jay',
  },
  {
    quote: 'Keep your face to the sunshine and you cannot see a shadow.',
    author: 'Jay',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
