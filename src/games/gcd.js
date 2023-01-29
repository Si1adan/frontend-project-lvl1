import { game } from '../index.js';
import { getRandomInt } from '../utils.js';

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  const getGCD = (num1, num2) => {
    const smallerNum = (num1 < num2 ? num1 : num2);
    for (let j = smallerNum; ; j -= 1) {
      if (num1 % j === 0 && num2 % j === 0) {
        return j;
      }
    }
  };

  const getExp = () => {
    const num1 = getRandomInt();
    const num2 = getRandomInt();

    const exp = `${num1} ${num2}`;
    const correctAnswer = getGCD(num1, num2);
    return [exp, correctAnswer];
  };
  const getCorrectAnswer = (correctAnswer) => correctAnswer;

  game(getExp, getCorrectAnswer, rules);
};
