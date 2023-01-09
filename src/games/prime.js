import readlineSync from 'readline-sync';
import { getRandomInt, isPrime } from '../random-generator.js';
import * as engine from '../index.js';

const prime = () => {
  const userName = engine.welcome();
  engine.rules('Answer "yes" if given number is prime. Otherwise answer "no".');

  const iter = () => {
    const roundsCount = 3;

    for (let i = 0; i < roundsCount; i += 1) {
      const num = getRandomInt();
      const correctAnswer = isPrime(num) ? 'yes' : 'no';
      const exp = num;

      const userAnswer = readlineSync.question(`Question: ${exp}\nYour answer: `).trim().toLowerCase();

      if (correctAnswer.toString() === userAnswer) {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }

    console.log(`Congratulations, ${userName}!`);
  };

  iter();
};

export default prime;
