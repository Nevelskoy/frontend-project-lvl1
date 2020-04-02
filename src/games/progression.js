import getRandomInt from '../utils.js';
import playGames from '../index.js';

const description = 'What number is missing in the progression?';

const lengthProgression = 10;


const getProgression = (step, start) => {
  const progression = [];
  for (let current = start; progression.length < lengthProgression; current += step) {
    progression.push(current);
  }
  return progression;
};

const getGameData = () => {
  const step = getRandomInt(2, 9);
  const start = getRandomInt(0, 100);
  const numIndex = getRandomInt(0, lengthProgression - 1);
  const progression = getProgression(step, start);
  const answer = progression[numIndex];
  progression[numIndex] = '..';
  return {
    question: progression.join(),
    correctAnswer: String(answer),
  };
};
export default () => playGames(getGameData, description);
