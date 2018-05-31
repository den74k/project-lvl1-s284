import { cons } from 'hexlet-pairs';
import playGame from '..';
import generateNumber from '../math';

const rule = 'What is the result of the expression?';

const brainCalc = () => {
  const randomNumForSign = generateNumber(1, 3);
  const randomNum1 = generateNumber(1, 10);
  const randomNum2 = generateNumber(1, 10);

  let question;
  let correctAnswer;
  switch (randomNumForSign) {
    case 1:
      question = `${randomNum1} + ${randomNum2}`;
      correctAnswer = randomNum1 + randomNum2;
      break;
    case 2:
      question = `${randomNum1} - ${randomNum2}`;
      correctAnswer = randomNum1 - randomNum2;
      break;
    case 3:
      question = `${randomNum1} * ${randomNum2}`;
      correctAnswer = randomNum1 * randomNum2;
      break;
    default: break;
  }

  return cons(question, correctAnswer);
};

export default () => playGame(brainCalc, rule);
