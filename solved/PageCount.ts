// https://www.hackerrank.com/challenges/drawing-book/problem

function pageCount(n: number, p: number): number {
  // Write your code here
  if (p === n || p === 1) {
    return 0;
  }
  const fromStart = Math.floor(p / 2);
  const fromEnd = n % 2 ? Math.floor((n - p) / 2) : Math.ceil((n - p) / 2);

  return Math.min(fromStart, fromEnd);
}