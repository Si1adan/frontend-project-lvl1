import * as engine from '../index.js';
import {
  getCalcCorrectAnswer, getCalcExp, getRandomInt, getRandomOperator,
} from '../utils.js';

export default () => {
  const rules = 'What is the result of the expression?';
  const userName = engine.welcome(rules);

  for (let i = 0; i < engine.roundsCount; i += 1) {
    const num1 = getRandomInt(1, 50);
    const num2 = getRandomInt(1, 50);
    const operator = getRandomOperator();

    const exp = getCalcExp(num1, num2, operator);
    const correctAnswer = getCalcCorrectAnswer(num1, num2, operator);

    const userAnswer = engine.askQuestion(exp);
    const endFlag = engine.checkAnswer(userName, correctAnswer, userAnswer);
    if (endFlag) {
      return;
    }
  }

  engine.end(userName);
};
