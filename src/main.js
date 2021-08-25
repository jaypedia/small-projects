import PopUp from './popup.js';
import GameBuilder from './game.js';

const gameFinishBanner = new PopUp();
const game = new GameBuilder()
  .withGameDuration(20)
  .withCarrotCount(20)
  .withBugCount(20)
  .build();

game.setGameStopListener((reason) => {
  let message;
  switch (reason) {
    case 'cancel':
      message = 'REPLAY❓';
      break;
    case 'win':
      message = 'YOU WON🎉';
      break;
    case 'lose':
      message = 'YOU lost💩';
      break;
    default:
      throw new Error('not valid reason');
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
  game.start();
});
