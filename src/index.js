import readlineSync from 'readline-sync';

export const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  return userName;
};

export const playEven = () => {
  const userName = getUserName();
  console.log();
  const testForEven = (acc) => {
    if (acc === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }

    const question = Math.floor(Math.random() * 100);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

    if (answer === correctAnswer) {
      console.log('Correct');
      return testForEven(acc + 1);
    }
    console.log(`'${answer}' is wrong answer ;(.Correct answer was '${correctAnswer}'`);
    return console.log(`Let's try again, ${userName}`);
  };
  return testForEven(0);
};
