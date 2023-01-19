import * as engine from '../index.js';
import { getGCD, getRandomInt } from '../utils.js';

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const userName = engine.welcome(rules);

  for (let i = 0; i < engine.roundsCount; i += 1) {
    const num1 = getRandomInt();
    const num2 = getRandomInt();

    const exp = `${num1} ${num2}`;
    const correctAnswer = getGCD(num1, num2);

    const userAnswer = engine.askQuestion(exp);
    const endFlag = engine.checkAnswer(userName, correctAnswer, userAnswer);
    if (endFlag) {
      return;
    }
  }

  engine.end(userName);
};
