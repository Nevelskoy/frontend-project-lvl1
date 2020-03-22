import readlineSync from 'readline-sync';

const playGame = (game, rule) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);

  for (let attempts = 0; attempts < 3; attempts += 1) {
    const gameStart = game();
    const question = gameStart.questionGame;
    const solve = gameStart.correctAnswer;
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (solve === answerUser) {
      console.log('Correct!');
      if (attempts === 2) {
        console.log(`Congratulations, ${userName}!`);
        break;
      }
    } else {
      console.log(`"${answerUser}" is wrong answer ;( Correct answer was "${solve}".`);
      console.log(`Let's try again, ${userName}`);
      break;
    }
  }
};
export default playGame;
