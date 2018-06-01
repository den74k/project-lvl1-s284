import { cons } from 'hexlet-pairs';
import playGame from '..';
import generateNumber from '../utils';

const rule = 'Balance the given number';

const balancingNumber = (number) => {
  const doArrayFromNumber = num => String(num).split('').map(Number);

  const doBalancedNumberFromArray = (array) => {
    const arr = array;
    arr.sort((a, b) => a - b);
    const lastNumIndex = arr.length - 1;
    while (arr[0] < arr[lastNumIndex] - 1) {
      arr[0] += 1;
      arr[lastNumIndex] -= 1;
      arr.sort((a, b) => a - b);
    }
    return Number(array.join(''));
  };
  return doBalancedNumberFromArray(doArrayFromNumber(number));
};

const brainBalance = () => {
  const question = generateNumber(100, 9999);
  const correctAnswer = balancingNumber(question);
  return cons(question, correctAnswer);
};

export default () => playGame(brainBalance, rule);
