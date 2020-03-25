import readlineSync from 'readline-sync';

const playGame = (gameData, description) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let attempts = 0; attempts < 3; attempts += 1) {
    const { question: task, correctAnswer: answer } = gameData();
    console.log(`Question: ${task}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (answer === answerUser) {
      console.log('Correct!');
    } else {
      return console.log(`"${answerUser}" is wrong answer ;( Correct answer was "${answer}". \n Let's try again, ${userName}`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default playGame;
