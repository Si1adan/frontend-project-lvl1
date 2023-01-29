import { game } from '../index.js';
import { getRandomInt } from '../utils.js';

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const isPrime = (num) => {
    if (num < 2) {
      return false;
    }

    for (let i = 2; i <= num / 2; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  };
  const getExp = () => getRandomInt();
  const getCorrectAnswer = (exp) => (isPrime(exp) ? 'yes' : 'no');

  game(getExp, getCorrectAnswer, rules);
};
