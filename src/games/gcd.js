import getRandomInt from '../utils.js';
import playGames from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (numFirst, numSecond) => {
  if (!numSecond) return numFirst;
  return getGcd(numSecond, numFirst % numSecond);
};

const getGameData = () => {
  const numFirst = getRandomInt(0, 100);
  const numSecond = getRandomInt(0, 100);
  return {
    question: `${numFirst}  ${numSecond}`,
    correctAnswer: String(getGcd(numFirst, numSecond)),
  };
};
export default () => playGames(getGameData, description);
