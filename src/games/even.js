import getRandomInt from '../randomNumber.js';
import playGames from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const eventNum = (number) => {
  const parityControl = 2;
  return number % parityControl === 0;
};

const gameEven = () => {
  const numRandom = getRandomInt(100);
  const gameData = {
    questionGame: String(numRandom),
    correctAnswer: eventNum(numRandom) ? 'yes' : 'no',
  };
  return gameData;
};
export default () => playGames(gameEven, gameRule);
