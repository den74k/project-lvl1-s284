import { cons } from 'hexlet-pairs';
import playGame from '..';
import generateNumber from '../utils';

const rule = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  const num1 = Math.abs(a);
  const num2 = Math.abs(b);
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const brainGcd = () => {
  const randomNum1 = generateNumber(-50, 100);
  const randomNum2 = generateNumber(-50, 100);
  const question = `${randomNum1} ${randomNum2}`;
  const correctAnswer = gcd(randomNum1, randomNum2);
  return cons(question, correctAnswer);
};

export default () => playGame(brainGcd, rule);
