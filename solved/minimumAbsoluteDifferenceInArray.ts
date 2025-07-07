// https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem

function minimumAbsoluteDifference(arr: number[]): number {
  // Write your code here
  const sorted = arr.sort();
  let min = Infinity;
  for (let i = 0; i < sorted.length - 1; i++) {
    const diff = sorted[i + 1] - sorted[i];
    console.log(sorted[i + 1] , sorted[i], diff);
    min = Math.min(Math.abs(diff), min);
  }
  return min;
}



console.log(minimumAbsoluteDifference([51, -10, -20, 22, 31, 43]))