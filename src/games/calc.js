import getRandomInt from '../randomNumber.js';
import playGames from '../index.js';

const gameRule = 'What is the result of the expression?';

const calculation = (operator, numOne, numTwo) => {
  let answer;
  if (operator === '+') {
    answer = String(numOne + numTwo);
  } else if (operator === '*') {
    answer = String(numOne * numTwo);
  } else if (operator === '-') {
    answer = String(numOne - numTwo);
  }
  return answer;
};

const getGameData = () => {
  const signs = ['+', '-', '*'];
  const numOne = getRandomInt(0, 100);
  const numTwo = getRandomInt(0, 100);
  const operator = signs[getRandomInt(0, 3)];
  const gameData = {
    questionGame: `${numOne} ${operator} ${numTwo}`,
    correctAnswer: calculation(operator, numOne, numTwo),
  };
  return gameData;
};
export default () => playGames(getGameData, gameRule);
