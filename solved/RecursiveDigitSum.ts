// https://www.hackerrank.com/challenges/recursive-digit-sum/problem

function superDigit(n: string, k: number): number {
  // Write your code here
  const num = n.split('').map(n => Number.parseInt(n, 10)).reduce((a, b) => a + b, 0) * k;
  if (num < 10) {
    return num;
  } else {
    return superDigit(num.toString(10), 1);
  }
}


console.log(superDigit('148',3),3)