import readlineSync from 'readline-sync';

const roundCounter = 3;

export default (game, rule) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rule}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);

  const startGame = (roundsCount) => {
    if (roundsCount === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const newGame = game();
    const question = newGame.questionFromGame;
    const correctAnswer = String(newGame.correctAnswerFromGame);

    console.log(`Question: ${question}`);
    const answerFromUser = readlineSync.question('Your answer: ');

    if (answerFromUser === correctAnswer) {
      console.log('Correct');
    } else {
      console.log(`'${answerFromUser}' is wrong answer ;(.Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
    startGame(roundsCount - 1);
  };
  startGame(roundCounter);
};
