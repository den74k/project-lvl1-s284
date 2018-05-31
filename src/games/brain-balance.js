import { cons } from 'hexlet-pairs';
import playGame from '..';
import generateNumber from '../math';

const rule = 'Balance the given number';

const balancingNumbers = (number) => {
  const arrayOfNumbers = (num) => {
    const arr = [];
    const numbersToString = String(num);
    for (let i = 0; i < numbersToString.length; i += 1) {
      const numeralFromString = Number(String(num)[i]);
      arr.push(numeralFromString);
    }
    return arr;
  };

  const arrayBalancing = (arr) => {
    const balancing = (elements) => {
      const sortedArray = elements.sort((a, b) => a - b);
      const firstNum = sortedArray[0];
      const lastNum = sortedArray[sortedArray.length - 1];
      if (firstNum < lastNum - 1) {
        sortedArray[0] = firstNum + 1;
        sortedArray[sortedArray.length - 1] = lastNum - 1;
        return balancing(sortedArray);
      }
      return elements;
    };
    return balancing(arr);
  };

  const balancedArrayToNumber = (arr) => {
    let balancedNum = '';
    arr.forEach((item) => {
      balancedNum += item;
    });
    return Number(balancedNum);
  };
  return balancedArrayToNumber(arrayBalancing(arrayOfNumbers(number)));
};

const brainBalance = () => {
  const question = generateNumber(100, 9999);
  const correctAnswer = balancingNumbers(question);
  return cons(question, correctAnswer);
};

export default () => playGame(brainBalance, rule);
