import playGame from '..';
import { generateNumber, isEven } from '../math';

const rule = 'Answer "yes" if number even otherwise answer "no".';

const brainEven = () => {
  const questionFromGame = generateNumber(1, 100);
  const correctAnswerFromGame = isEven(questionFromGame) ? 'yes' : 'no';
  return { questionFromGame, correctAnswerFromGame };
};
export default () => playGame(brainEven, rule);
