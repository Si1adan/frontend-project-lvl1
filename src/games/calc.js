import * as engine from '../index.js';

const calc = () => {
  const userName = engine.welcome();
  engine.rules('What is the result of the expression?');
  engine.iterations(userName);
};

export default calc;
