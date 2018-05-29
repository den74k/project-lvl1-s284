import readlineSync from 'readline-sync';

export const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  return userName;
};

const getQuestion = (game) => {
  if (game === 'even') {
    return Math.floor(Math.random() * 100);
  }
  return 'Undefined game';
};

const getAnswer = () => readlineSync.question('Your answer: ');

const testAnswer = (game, question) => {
  if (game === 'even') {
    return question % 2 === 0 ? 'yes' : 'no';
  }
  return 'undefined';
};

export const playGame = (game) => {
  const userName = getUserName();
  console.log();
  const testForEven = (acc) => {
    if (acc === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }

    const question = getQuestion(game);
    console.log(`Question: ${question}`);
    const userAnswer = getAnswer();
    const correctAnswer = testAnswer(game, question);

    if (userAnswer === correctAnswer) {
      console.log('Correct');
      return testForEven(acc + 1);
    }
    console.log(`'${userAnswer}' is wrong answer ;(.Correct answer was '${correctAnswer}'`);
    return console.log(`Let's try again, ${userName}`);
  };
  return testForEven(0);
};
