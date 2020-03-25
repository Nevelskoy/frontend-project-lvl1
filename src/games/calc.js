import getRandomInt, { signs } from '../utils.js';
import playGames from '../index.js';

const description = 'What is the result of the expression?';


const calculation = (operator, numOne, numTwo) => {
  let answer;
  switch (operator) {
    case '*':
      answer = String(numOne * numTwo);
      break;
    case '-':
      answer = String(numOne - numTwo);
      break;
    default:
      answer = String(numOne + numTwo);
  }
  return answer;
};

const getGameData = () => {
  const numOne = getRandomInt(0, 100);
  const numTwo = getRandomInt(0, 100);
  const operator = signs[getRandomInt(0, 2)];
  const gameData = {
    question: `${numOne} ${operator} ${numTwo}`,
    correctAnswer: calculation(operator, numOne, numTwo),
  };
  return gameData;
};
export default () => playGames(getGameData, description);
