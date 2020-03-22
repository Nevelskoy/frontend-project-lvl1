import getRandomInt from '../randomNumber.js';
import playGames from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const numRandom = getRandomInt(0, 100);
  const gameData = {
    questionGame: String(numRandom),
    correctAnswer: isEven(numRandom) ? 'yes' : 'no',
  };
  return gameData;
};
export default () => playGames(getGameData, gameRule);
