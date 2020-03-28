import getRandomInt from '../utils.js';
import playGames from '../index.js';

const description = 'What is the result of the expression?';

const signs = ['+', '-', '*'];

const calculation = (operator, numOne, numTwo) => {
  let answer;
  switch (operator) {
    case '+':
      answer = String(numOne + numTwo);
      break;
    case '*':
      answer = String(numOne * numTwo);
      break;
    case '-':
      answer = String(numOne - numTwo);
      break;
    default:
      throw new Error(`Unknown order state: '${operator}'!`);
  }
  return answer;
};

const getGameData = () => {
  const numOne = getRandomInt(0, 100);
  const numTwo = getRandomInt(0, 100);
  const operator = signs[getRandomInt(0, 2)];
  return {
    question: `${numOne} ${operator} ${numTwo}`,
    correctAnswer: calculation(operator, numOne, numTwo),
  };
};
export default () => playGames(getGameData, description);
