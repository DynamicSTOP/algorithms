// https://www.hackerrank.com/challenges/candies/problem


function candies(n: number, arr: number[]): number {
  let res = new Array(arr.length).fill(1);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      res[i] = res[i - 1] + 1;
    }
  }

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > arr[i + 1]) {
      res[i] = Math.max(res[i + 1] + 1, res[i]);
    }
  }
  console.log(res);
  return res.reduce((p, c) => p + c, 0);
}

// console.log(candies(0, [1, 2, 2]), 4);
// console.log(candies(0, [4, 6, 4, 5, 6, 2]), 10);
console.log(candies(0, [2, 4, 3, 5, 2, 6, 4, 5]), 12);
