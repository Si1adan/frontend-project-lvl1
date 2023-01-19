import * as engine from '../index.js';
import { isEven, getRandomInt } from '../utils.js';

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const userName = engine.welcome(rules);

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
