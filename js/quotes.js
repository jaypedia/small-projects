const quotes = [
  {
    quote: 'Big results require big ambitious.',
  },
  {
    quote:
      'Focus on your goals, not your fear. Focus like a laser beam on your goals.',
  },
  {
    quote: 'My ultimate goal is to be better today than yesterday.',
  },
  {
    quote: 'The easiest way to reach my goal is to never give up.',
  },
  {
    quote: 'Great things never came from comfort zones.',
  },
  {
    quote: 'What keeps me going is Goals.',
  },
  {
    quote: 'I am capable of amazing things.',
  },
  {
    quote:
      'Find out what you like doing best and get someone to pay you for doing it.',
  },
  {
    quote:
      "You're braver than you believe, and stronger than you seem, and smarter than you think.",
  },
  {
    quote: 'Keep your face to the sunshine and you cannot see a shadow.',
  },
];

const quote = document.querySelector('#quote span');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
