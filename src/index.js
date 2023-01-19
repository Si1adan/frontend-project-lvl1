import readlineSync from 'readline-sync';

export const roundsCount = 3;

export const welcome = (rules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  return userName;
};

export const askQuestion = (exp) => {
  console.log(`Question: ${exp}`);
  const userAnswer = readlineSync.question('Your answer: ').trim().toLowerCase();

  return userAnswer;
};

export const checkAnswer = (userName, correctAnswer, userAnswer) => {
  if (correctAnswer.toString() === userAnswer) {
    console.log('Correct!');
    return false;
  }

  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
  return true;
};

export const end = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};
