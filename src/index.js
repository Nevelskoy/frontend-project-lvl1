import readlineSync from 'readline-sync';

const playGame = (game, rule) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);

  for (let attempts = 0; attempts < 3; attempts += 1) {
    const { questionGame: quest, correctAnswer: answer } = game();
    console.log(`Question: ${quest}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (answer === answerUser) {
      console.log('Correct!');
      if (attempts === 2) {
        console.log(`Congratulations, ${userName}!`);
        break;
      }
    } else {
      console.log(`"${answerUser}" is wrong answer ;( Correct answer was "${answer}".`);
      console.log(`Let's try again, ${userName}`);
      break;
    }
  }
};
export default playGame;
