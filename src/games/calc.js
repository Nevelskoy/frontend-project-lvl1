import getRandomInt from '../randomNumber.js';
import playGames from '../index.js';

const gameRule = 'What is the result of the expression?';

const calculate = (operator, numOne, numTwo) => {
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

const gameCalculate = () => {
  const signs = ['+', '-', '*'];
  const numOne = getRandomInt(100);
  const numTwo = getRandomInt(100);
  const operator = signs[getRandomInt(3)];
  const gameData = {
    questionGame: `${numOne} ${operator} ${numTwo}`,
    correctAnswer: calculate(operator, numOne, numTwo),
  };
  return gameData;
};
export default () => playGames(gameCalculate, gameRule);
