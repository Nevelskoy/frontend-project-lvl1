import getRandomInt from '../randomNumber.js';
import playGames from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getDivisor = (numFirst, numSecond) => {
  if (!numSecond) return numFirst;
  return getDivisor(numSecond, numFirst % numSecond);
};

const getGameData = () => {
  const numFirst = getRandomInt(0, 100);
  const numSecond = getRandomInt(0, 100);
  const gameData = {
    questionGame: `${numFirst}  ${numSecond}`,
    correctAnswer: String(getDivisor(numFirst, numSecond)),
  };
  return gameData;
};
export default () => playGames(getGameData, gameRule);
