import getRandomInt from '../utils.js';
import playGames from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const num = getRandomInt(0, 100);
  const gameData = {
    question: String(num),
    correctAnswer: isEven(num) ? 'yes' : 'no',
  };
  return gameData;
};
export default () => playGames(getGameData, description);
