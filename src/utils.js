export const isEven = (num) => (num % 2 === 0);

export const isPrime = (num) => {
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

export const getRandomInt = (minimum = 1, maximum = 100) => {
  const min = Math.ceil(minimum);
  const max = Math.floor(maximum);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomOperator = (arrayOfOperators = ['+', '-', '*']) => {
  const index = Math.floor(Math.random() * arrayOfOperators.length);

  return arrayOfOperators[index];
};

export const getGCD = (num1, num2) => {
  for (let j = (num1 < num2 ? num1 : num2); ; j -= 1) {
    if (num1 % j === 0 && num2 % j === 0) {
      return j;
    }
  }
};

export const getCalcExp = (num1, num2, operator) => {
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

export const getCalcCorrectAnswer = (num1, num2, operator) => {
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
