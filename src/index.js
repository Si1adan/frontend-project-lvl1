import readlineSync from 'readline-sync';

export default (getExpAndCorrectAnswer, rules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const [exp, correctAnswer] = getExpAndCorrectAnswer();

    console.log(`Question: ${exp}`);
    const userAnswer = readlineSync.question('Your answer: ').trim().toLowerCase();

    if (correctAnswer.toString() === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
