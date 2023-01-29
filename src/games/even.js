import { game } from '../index.js';
import { getRandomInt } from '../utils.js';

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const isEven = (num) => (num % 2 === 0);
  const getExp = () => getRandomInt();
  const getCorrectAnswer = (exp) => (isEven(exp) ? 'yes' : 'no');

  game(getExp, getCorrectAnswer, rules);
};
