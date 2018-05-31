import { cons } from 'hexlet-pairs';
import playGame from '..';
import generateNumber from '../math';

const rule = 'Answer "yes" if number prime otherwise answer "no"';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  let i = 2;
  while (i <= number / 2) {
    if (number % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

const brainPrime = () => {
  const question = generateNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => playGame(brainPrime, rule);
