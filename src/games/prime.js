import getRandomInt from '../randomNumber.js';
import playGames from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const numRandom = getRandomInt(0, 100);
  const gameData = {
    questionGame: String(numRandom),
    correctAnswer: isPrime(numRandom) ? 'yes' : 'no',
  };
  return gameData;
};
export default () => playGames(getGameData, gameRule);
