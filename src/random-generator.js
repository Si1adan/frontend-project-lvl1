export const getRandomInt = (minimum = 1, maximum = 100) => {
  const min = Math.ceil(minimum);
  const max = Math.floor(maximum);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
export const getRandomOperator = (arrayOfOperators = ['+', '-', '*']) => {
  const index = Math.floor(Math.random() * arrayOfOperators.length);
  return arrayOfOperators[index];
};
