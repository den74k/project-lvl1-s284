import { cons, car, cdr } from 'hexlet-pairs';
import playGame from '..';
import generateNumber from '../math';

const rule = 'What number is missing in this progression?';
const progressionLength = 10;

const arithmeticProgression = (length) => {
  const startNum = generateNumber(0, 100);
  const progressionDiference = generateNumber(1, 10);
  const arr = [startNum];
  for (let i = 0; i < length - 1; i += 1) {
    arr.push(arr[i] + progressionDiference);
  }
  return arr;
};

const makeQuestionAndAnswer = (progression) => {
  const newProgression = progression;
  const randomElement = generateNumber(0, newProgression.length);
  const answer = newProgression[randomElement];
  newProgression[randomElement] = '..';
  const question = newProgression.join(' ');
  return cons(question, answer);
};

const brainProgression = () => {
  const newProgression = arithmeticProgression(progressionLength);
  const getQuestionAndAnswer = makeQuestionAndAnswer(newProgression);
  const question = car(getQuestionAndAnswer);
  const correctAnswer = cdr(getQuestionAndAnswer);
  return cons(question, correctAnswer);
};

export default () => playGame(brainProgression, rule);
