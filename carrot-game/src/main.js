'use strict';

import PopUp from './popup.js';
import { GameBuilder, Reason } from './game.js';
import * as sound from './sound.js';

const gameFinishBanner = new PopUp();
const game = new GameBuilder()
  .withGameDuration(20)
  .withCarrotCount(20)
  .withBugCount(20)
  .build();

// When the game ends, a callback function that changes pop-up messages according to the reason is passed as an argument.
game.setGameStopListener((reason, score) => {
  let message;
  switch (reason) {
    case Reason.cancel:
      message = 'REPLAY❓';
      sound.playAlert();
      break;
    case Reason.win:
      message = 'YOU WON🎉';
      sound.playWin();
      break;
    case Reason.lose:
      message = `No bugs!😫 ${score}`;
      sound.playLost();
      break;
    default:
      throw new Error('not valid reason');
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
  game.start();
});
