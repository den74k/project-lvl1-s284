import { cons } from 'hexlet-pairs';
import playGame from '..';
import generateNumber from '../math';

const rule = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const brainEven = () => {
  const question = generateNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};
export default () => playGame(brainEven, rule);
