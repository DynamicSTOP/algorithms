// https://www.hackerrank.com/challenges/max-array-sum/problem
/*
 * Complete the 'maxSubsetSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
// too many recursion calls
// function maxSubsetSum(arr: number[], start = 0, mem: Record<number, number | undefined> = {}): number {
//   if (arr.length === 0) {
//     return 0;
//   }
//   if (arr.length === 1) {
//     return Math.max(arr[0], 0);
//   }
//   const old2 = mem[start + 2];
//   const old1 = mem[start + 1];

//   const a = Math.max(0, arr[0]) + (old2 === undefined ? maxSubsetSum(arr.slice(2), start + 2, mem) : old2);
//   const b = old1 === undefined ? maxSubsetSum(arr.slice(1), start + 1, mem) : old1;

//   const max = Math.max(a, b);
//   mem[start] = max;
//   return max;
// }


function maxSubsetSum(arr: number[]): number {
  if (arr.length < 3) {
    return Math.max(0, ...arr);
  }

  const mem: Record<number, number | undefined> = {}
  // can replace memory with two vars, but meh....
  for (let i = arr.length - 1; i >= 0; i--) {
    let a = Math.max(0, arr[i]) + (mem[i + 2] ?? 0);
    let b = mem[i + 1] ?? 0;
    mem[i] = Math.max(a, b);
  }

  return mem[0] ?? 0;
}

console.log(maxSubsetSum([-2, 1, 3, -4, 5]), 8)