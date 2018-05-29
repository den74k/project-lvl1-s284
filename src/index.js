import readlineSync from 'readline-sync';

export const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
};

export const playGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no"\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);

  const startGame = (roundsCount) => {
    if (roundsCount === 0) {
      return console.log(`Congratulations, ${userName}!`);
    }

    const numberGeneration = Math.floor(Math.random() * 10);
    console.log(`Question: ${numberGeneration}`);
    const answerFromUser = readlineSync.question('Your answer: ');
    const correctAnswer = numberGeneration % 2 === 0 ? 'yes' : 'no';

    if (answerFromUser === correctAnswer) {
      console.log('Correct');
      return startGame(roundsCount - 1);
    }
    console.log(`'${answerFromUser}' is wrong answer ;(.Correct answer was '${correctAnswer}'`);
    return console.log(`Let's try again, ${userName}`);
  };
  return startGame(3);
};
