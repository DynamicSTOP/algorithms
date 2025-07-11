// https://www.hackerrank.com/challenges/pairs/problem

function pairs(k: number, arr: number[]): number {
  // Write your code here

  const map: Record<number, number | undefined> = {};
  arr.forEach(n => map[n] = n);


  let pairs = 0;
  arr.forEach(n => {
    if (map[n + k] !== undefined) {
      pairs++;
    }
  })
  return pairs;
}



console.log(pairs(2, [1, 5, 3, 4, 2]), 3);