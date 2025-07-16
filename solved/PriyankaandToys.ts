// https://www.hackerrank.com/challenges/priyanka-and-toys/problem


function toys(w: number[]): number {
  // Write your code here
  w.sort((a, b) => a - b);

  let containers = 1;
  let currentMin = w[0];


  w.forEach(t => {
    if (t <= currentMin + 4) {
      return;
    }
    containers++
    currentMin = t;
  });

  return containers;
}

console.log(toys([1, 2, 3, 4, 5, 10, 11, 12, 13]), 2)
console.log(toys([1, 2, 3, 21, 7, 12, 14, 21]), 4)
