import readlineSync from 'readline-sync';
import { getRandomInt } from '../random-generator.js';
import * as engine from '../index.js';

const progression = () => {
  const userName = engine.welcome();
  engine.rules('What number is missing in the progression?');

  const iter = () => {
    const roundsCount = 3;
    const arrLength = 10;

    for (let i = 0; i < roundsCount; i += 1) {
      const initNum = getRandomInt(0, 10);
      const diff = getRandomInt(1, 10);
      const emptyPos = getRandomInt(0, 10);
      const row = [initNum];

      for (let j = 1; j <= arrLength; j += 1) {
        row.push(initNum + j * diff);
      }

      const correctAnswer = row[emptyPos];
      row[emptyPos] = '..';
      const exp = row.toString().replaceAll(',', ' ');
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

export default progression;
