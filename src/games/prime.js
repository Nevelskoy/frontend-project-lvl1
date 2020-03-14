import getRandomInt from '../randomNumber.js';
import playGames from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeNum = (number) => {
  let correctAnswer = 'yes';
  let divisor = number - 1;
  do {
    if (number % divisor === 0) {
      correctAnswer = 'no';
      break;
    }
    divisor -= 1;
  } while (divisor > 1);
  return correctAnswer;
};

const gamePrime = () => {
  const numRandom = getRandomInt(100);
  const gameData = {
    questionGame: `${numRandom}`,
    correctAnswer: primeNum(numRandom),
  };
  return gameData;
};
export default () => playGames(gamePrime, gameRule);
