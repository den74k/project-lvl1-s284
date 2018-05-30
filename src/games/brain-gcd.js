import playGame from '..';
import { generateNumber, gcd } from '../math';

const rule = 'Find the greatest common divisor of given numbers.';

const brainGcd = () => {
  const randomNum1 = generateNumber(-50, 100);
  const randomNum2 = generateNumber(-50, 100);
  const questionFromGame = `${randomNum1} ${randomNum2}`;
  const correctAnswerFromGame = gcd(randomNum1, randomNum2);
  return { questionFromGame, correctAnswerFromGame };
};

export default () => playGame(brainGcd, rule);
