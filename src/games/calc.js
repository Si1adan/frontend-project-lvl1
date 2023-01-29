import { game } from '../index.js';
import { getRandomInt } from '../utils.js';

export default () => {
  const rules = 'What is the result of the expression?';

  const getRandomOperator = (arrayOfOperators = ['+', '-', '*']) => {
    const index = Math.floor(Math.random() * arrayOfOperators.length);

    return arrayOfOperators[index];
  };

  const getCalcExp = (num1, num2, operator) => {
    switch (operator) {
      case '+':
        return `${num1} + ${num2}`;
      case '-':
        return `${num1} - ${num2}`;
      case '*':
        return `${num1} * ${num2}`;
      default:
        return 'Unexpected token.';
    }
  };

  const getCalcCorrectAnswer = (num1, num2, operator) => {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      default:
        return 'Unexpected token.';
    }
  };

  const getExp = () => {
    const num1 = getRandomInt(1, 50);
    const num2 = getRandomInt(1, 50);
    const operator = getRandomOperator();

    const exp = getCalcExp(num1, num2, operator);
    const correctAnswer = getCalcCorrectAnswer(num1, num2, operator);
    return [exp, correctAnswer];
  };
  const getCorrectAnswer = (correctAnswer) => correctAnswer;

  game(getExp, getCorrectAnswer, rules);
};
