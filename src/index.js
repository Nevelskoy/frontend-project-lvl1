import readlineSync from 'readline-sync';

const playGames = (game, rule) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);

  let attempts = 0;

  do {
    const gameStart = game();
    const question = gameStart.questionGame;
    const solve = gameStart.correctAnswer;
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (solve === answerUser) {
      console.log('Correct!');
      attempts += 1;
    } else {
      console.log(`"${answerUser}" is wrong answer ;( Correct answer was "${solve}".`);
      break;
    }
  } while (attempts < 3);

  if (attempts === 3) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}`);
  }
};
export default playGames;
