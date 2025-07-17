// https://www.hackerrank.com/challenges/compare-the-triplets/problem


function compareTriplets(a: number[], b: number[]): number[] {
  let aPoints = 0;
  let bPoints = 0;
  a.forEach((aEl, index) => {
    if (aEl > b[index]) {
      aPoints++
    } else if (aEl < b[index]) {
      bPoints++;
    }
  })
  return [aPoints, bPoints];
}


console.log(compareTriplets([5, 6, 7], [3, 6, 10]), '1 1');
console.log(compareTriplets([17, 28, 30], [99, 16, 8]), '2 1');
