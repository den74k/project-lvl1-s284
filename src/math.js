
export const generateNumber = (min, max) => Math.floor(Math.random() * max) + min;

export const isEven = num => num % 2 === 0;

export const gcd = (a, b) => {
  const num1 = Math.abs(a);
  const num2 = Math.abs(b);
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};
