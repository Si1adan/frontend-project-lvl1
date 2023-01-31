import startGame from '../index.js';
import getRandomInt from '../utils.js';

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const isEven = (num) => (num % 2 === 0);

  const getExpAndCorrectAnswer = () => {
    const exp = getRandomInt();
    const correctAnswer = (isEven(exp) ? 'yes' : 'no');

    return [exp, correctAnswer];
  };

  startGame(getExpAndCorrectAnswer, rules);
};
