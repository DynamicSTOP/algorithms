// https://www.hackerrank.com/challenges/triple-sum/problem


// the key was to recheck position before returning index from binary search

const binary = (array: number[], needle: number, from = 0): number => {
  if (array[0] > needle) {
    return -1;
  }
  if (array[array.length - 1] < needle) {
    return array.length - 1;
  }


  let low = from;
  let high = array.length - 1;
  let mid = Math.round((high - low) / 2);

  while (low < high) {
    const el = array[mid];
    const diff = needle - el;
    if (diff === 0) {
      break;
    } else if (diff > 0) {
      low = mid + 1;
    } else { // diff < 0 
      high = mid - 1;
    }
    mid = Math.round(low + (high - low) / 2);
  }


  if (array[mid] < needle) {
    return mid
  } else if (array[mid] === needle) {
    return mid;
  } else {
    return mid - 1;
  }

  return mid;
}

/*
 * Complete the 'triplets' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 *  3. INTEGER_ARRAY c
 */


function uniq(arr: number[]): number[] {
  const hash: Record<number, boolean | undefined> = {};
  const nums: number[] = [];

  arr.forEach(a => {
    if (hash[a] !== undefined) {
      return;
    }
    hash[a] = true;
    nums.push(a);
  });

  return nums.sort((a, b) => a - b);
}

function triplets(a: number[], b: number[], c: number[]): number {
  let diff = 0;

  const aNums = uniq(a);
  const bNums = uniq(b);
  const cNums = uniq(c);
 
  let lastA = 0;
  let lastC = 0;
  //  a <=  b >= c
  bNums.forEach(n => {
    if (aNums[0] > n || cNums[0] > n) {
      return;
    }
    const aN = n > aNums[aNums.length - 1] ? aNums.length - 1 : binary(aNums, n, lastA);
    const cN = n > cNums[cNums.length - 1] ? cNums.length - 1 : binary(cNums, n, lastC);
    lastA = aN;
    lastC = cN;
    const d = (aN + 1) * (cN + 1);

    diff += d;
  });
  return diff;
}

console.log(triplets([1, 3, 5], [2, 3], [1, 2, 3]), 8);
console.log(triplets([1, 3, 5, 7], [5, 7, 9], [7, 9, 11, 13]), 12);
console.log(triplets([1, 4, 5], [2, 3, 3], [1, 2, 3]), 5);
console.log(triplets([1, 1, 1], [2, 2, 2], [1, 1, 1]), 1);

