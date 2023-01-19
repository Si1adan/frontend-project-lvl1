import * as engine from '../index.js';
import { getRandomInt } from '../utils.js';

export default () => {
  const rules = 'What number is missing in the progression?';
  const userName = engine.welcome(rules);

  for (let i = 0; i < engine.roundsCount; i += 1) {
    const initNum = getRandomInt(0, 10);
    const diff = getRandomInt(1, 10);
    const emptyPos = getRandomInt(0, 10);
    const row = [initNum];
    const rowLength = 10;

    for (let j = 1; j <= rowLength; j += 1) {
      row.push(initNum + j * diff);
    }

    const correctAnswer = row[emptyPos];
    row[emptyPos] = '..';
    const exp = row.toString().replaceAll(',', ' ');

    const userAnswer = engine.askQuestion(exp);
    const endFlag = engine.checkAnswer(userName, correctAnswer, userAnswer);
    if (endFlag) {
      return;
    }
  }

  engine.end(userName);
};
