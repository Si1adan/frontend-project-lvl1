/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';
import { getRandomInt } from '../random-generator.js';
import * as engine from '../index.js';

export const gcd = () => {
  const userName = engine.welcome();
  engine.rules('Find the greatest common divisor of given numbers.');
  const iterations = () => {
    const roundsCount = 3;
    for (let i = 0; i < roundsCount; i += 1) {
      const num1 = getRandomInt();
      const num2 = getRandomInt();
      const exp = `${num1} ${num2}`;
      const userAnswer = readlineSync.question(`Question: ${exp}\nYour answer: `).trim().toLowerCase();
      const correctAnswer = () => {
        for (let j = (num1 < num2 ? num1 : num2); ; j -= 1) {
          if (num1 % j === 0 && num2 % j === 0) {
            return j;
          }
        }
      };

      if (correctAnswer().toString() === userAnswer) {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer()}'.`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
    console.log(`Congratulations, ${userName}!`);
  };
  iterations();
};
