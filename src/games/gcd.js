import getRandomInt from '../randomNumber.js';
import playGames from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const gcdNum = (numFirst, numSecond) => {
  if (numSecond > numFirst) return gcdNum(numSecond, numFirst);
  if (!numSecond) return numFirst;
  return String(gcdNum(numSecond, numFirst % numSecond));
};

const gameGcd = () => {
  const numFirst = getRandomInt(100);
  const numSecond = getRandomInt(100);
  const gameData = {
    questionGame: `Question: ${numFirst}  ${numSecond}`,
    correctAnswer: gcdNum(numFirst, numSecond),
  };
  return gameData;
};
export default () => playGames(gameGcd, gameRule);
