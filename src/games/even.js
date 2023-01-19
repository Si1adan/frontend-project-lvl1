import * as engine from '../index.js';
import { isEven, getRandomInt } from '../utils.js';

export default () => {
  const userName = engine.welcome();

  for (let i = 0; i < engine.roundsCount; i += 1) {
    const exp = getRandomInt();
    const correctAnswer = isEven(exp) ? 'yes' : 'no';

    const userAnswer = engine.askQuestion(exp);
    const endFlag = engine.checkAnswer(userName, correctAnswer, userAnswer);
    if (endFlag) {
      return;
    }
  }

  engine.end(userName);
};
