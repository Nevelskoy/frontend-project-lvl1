import readlineSync from 'readline-sync';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let attempts = 0;

  const eventNum = () => {
    let num;
    let correctUnswer;
    do {
      console.log(`Question: ${num = getRandomInt(100)}`);
      if (num % 2 === 0) {
        correctUnswer = 'yes';
      } else if (num % 2 !== 0) {
        correctUnswer = 'no';
      }
      const answerUser = readlineSync.question('Your answer: ');
      if (correctUnswer === answerUser) {
        console.log('Correct!');
        attempts += 1;
      } else {
        console.log(`"${answerUser}" is wrong answer ;( Correct answer was "${correctUnswer}".`);
        break;
      }
    } while (attempts < 3);
  };
  eventNum();
  if (attempts === 3) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}`);
  }
};

export default greeting;
