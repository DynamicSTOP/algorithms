// https://www.hackerrank.com/challenges/find-the-median/problem
/*
 * Complete the 'findMedian' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function findMedian(arr: number[]): number {
  // Write your code here
  arr.sort((a, b) => a - b);
  return arr[Math.ceil((arr.length - 1) / 2)];
}

console.log(findMedian([0, 1, 2, 4, 6, 5, 3]), 3);