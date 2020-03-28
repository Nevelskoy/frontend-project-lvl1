import getRandomInt from '../utils.js';
import playGames from '../index.js';

const description = 'What number is missing in the progression?';

const lengthArray = 10;
let answer = 0;

const getHoleyArr = (array, hiddenNum) => {
  answer = array[hiddenNum];
  const newArr = array.splice(hiddenNum, 1, '..');
  return newArr;
};

const getProgression = (step, start, hiddenNum) => {
  const array = [];
  for (let i = start; array.length < lengthArray; i += 1) {
    i += step;
    array.push(i);
  }
  getHoleyArr(array, hiddenNum);
  return array;
};

const getGameData = () => {
  const step = getRandomInt(2, 9);
  const start = getRandomInt(0, 100);
  const hiddenNum = getRandomInt(0, lengthArray);
  const gameData = {
    question: `${getProgression(step, start, hiddenNum)}`,
    correctAnswer: String(answer),
  };
  return gameData;
};
export default () => playGames(getGameData, description);
