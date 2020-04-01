import getRandomInt from '../utils.js';
import playGames from '../index.js';

const description = 'What number is missing in the progression?';

const lengthProgression = 10;
let answer = 0;

const getProgression = (step, start, numIndex) => {
  const progression = [];
  for (let current = start; progression.length < lengthProgression; current += step) {
    progression.push(current);
  }
  answer = progression[numIndex];
  progression.splice(numIndex, 1, '..');
  return progression;
};

const getGameData = () => {
  const step = getRandomInt(2, 9);
  const start = getRandomInt(0, 100);
  const numIndex = getRandomInt(0, lengthProgression - 1);
  return {
    question: getProgression(step, start, numIndex),
    correctAnswer: String(answer),
  };
};
export default () => playGames(getGameData, description);
