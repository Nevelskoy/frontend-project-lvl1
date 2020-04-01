import getRandomInt from '../utils.js';
import playGames from '../index.js';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculate = (operator, numOne, numTwo) => {
  switch (operator) {
    case '+':
      return numOne + numTwo;
    case '*':
      return numOne * numTwo;
    case '-':
      return numOne - numTwo;
    default:
      throw new Error(`Unknown order state: '${operator}'!`);
  }
};

const getGameData = () => {
  const numOne = getRandomInt(0, 100);
  const numTwo = getRandomInt(0, 100);
  const operator = operators[getRandomInt(0, operators.length - 1)];
  return {
    question: `${numOne} ${operator} ${numTwo}`,
    correctAnswer: String(calculate(operator, numOne, numTwo)),
  };
};
export default () => playGames(getGameData, description);
