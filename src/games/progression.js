import { game } from '../index.js';
import getRandomInt from '../utils.js';

export default () => {
  const rules = 'What number is missing in the progression?';

  const getExpAndCorrectAnswer = () => {
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

    return [exp, correctAnswer];
  };

  game(getExpAndCorrectAnswer, rules);
};
