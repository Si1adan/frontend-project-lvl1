import readlineSync from 'readline-sync';
import { getRandomInt, getRandomOperator } from './random-generator.js';

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const rules = (str) => {
  console.log(str);
};

export const iterations = (userName) => {
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const num1 = getRandomInt();
    const num2 = getRandomInt();
    const operator = getRandomOperator();
    const exp = () => {
      switch (operator) {
        case '+':
          return `${num1} + ${num2}`;
        case '-':
          return `${num1} - ${num2}`;
        case '*':
          return `${num1} * ${num2}`;
        default:
          return 'Unexpected token';
      }
    };
    const userAnswer = readlineSync.question(`Question: ${exp()}\nYour answer: `).trim().toLowerCase();
    const correctAnswer = () => {
      switch (operator) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        default:
          return 'Unexpected token';
      }
    };

    if (correctAnswer().toString() === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer()}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
