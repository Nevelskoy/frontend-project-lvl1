import getRandomInt from '../randomNumber.js';
import playGames from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const eventNum = (number) => {
  let correctAnswer;
  const parityControl = 2;
  if (number % parityControl === 0) {
    correctAnswer = 'yes';
  } else if (number % parityControl !== 0) {
    correctAnswer = 'no';
  }
  return correctAnswer;
};

const gameEven = () => {
  const numRandom = getRandomInt(100);
  const gameData = {
    questionGame: `${numRandom}`,
    correctAnswer: eventNum(numRandom),
  };
  return gameData;
};
export default () => playGames(gameEven, gameRule);
