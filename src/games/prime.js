import getRandomInt from '../utils.js';
import playGames from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < 8; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const numRandom = getRandomInt(1, 100);
  const gameData = {
    question: String(numRandom),
    correctAnswer: isPrime(numRandom) ? 'yes' : 'no',
  };
  return gameData;
};
export default () => playGames(getGameData, description);
