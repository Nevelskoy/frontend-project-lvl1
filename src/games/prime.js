import getRandomInt from '../utils.js';
import playGames from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const num = getRandomInt(1, 100);
  return {
    question: String(num),
    correctAnswer: isPrime(num) ? 'yes' : 'no',
  };
};
export default () => playGames(getGameData, description);
