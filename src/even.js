import readlineSync from 'readline-sync';
import getRandomInt from './random-generator.js';

const even = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const isEven = (num) => (num % 2 === 0);
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const num = getRandomInt(1, 100);
    const userAnswer = readlineSync.question(`Question: ${num}\nYour answer: `).trim().toLowerCase();
    const correctAnswer = isEven(num) ? 'yes' : 'no';
    const wrongAnswer = !isEven(num) ? 'yes' : 'no';

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${wrongAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default even;
