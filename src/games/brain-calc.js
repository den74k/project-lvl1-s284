import playGame from '..';
import { generateNumber } from '../math';

const rule = 'What is the result of the expression?';

const brainCalc = () => {
  const randomNumForSign = generateNumber(1, 3);
  const randomNum1 = generateNumber(1, 10);
  const randomNum2 = generateNumber(1, 10);

  let questionFromGame;
  let correctAnswerFromGame;
  switch (randomNumForSign) {
    case 1:
      questionFromGame = `${randomNum1} + ${randomNum2}`;
      correctAnswerFromGame = randomNum1 + randomNum2;
      break;
    case 2:
      questionFromGame = `${randomNum1} - ${randomNum2}`;
      correctAnswerFromGame = randomNum1 - randomNum2;
      break;
    case 3:
      questionFromGame = `${randomNum1} * ${randomNum2}`;
      correctAnswerFromGame = randomNum1 * randomNum2;
      break;
    default: break;
  }

  return { questionFromGame, correctAnswerFromGame };
};

export default () => playGame(brainCalc, rule);
