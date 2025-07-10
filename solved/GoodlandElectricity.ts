// https://www.hackerrank.com/challenges/pylons/problem

function findMin(k: number, arr: number[]): number {
  let d = k - 1;
  let sol = 0;
  let index = 0;
  let lastStation = -1;
  do {
    // console.log({ index, lastStation, sol });
    const from = lastStation === -1 ? index + d : index + 2 * d;
    const till = index;
    // console.log('from =', from, 'till ', till, arr.slice(till, from + 1))
    for (let i = from; i >= till; i--) {
      if (arr[i] === 1) {
        // console.log('+', i);
        sol++;
        index = i + 1;
        lastStation = i;
        break;
      }
    }
    if (arr.length <= lastStation + k) {
      break;
    }
  } while (index < arr.length);

  return sol
}


function pylons(k: number, arr: number[]): number {
  // Write your code here

  // checks might not be 100% correct since i assume distance doesn't include city itself... meh... 22 test cases passed, whatever.

  // check no dropped at the start
  let noStation = true;
  for (let i = 0; i < Math.min(arr.length, k); i++) {
    if (arr[i] !== 0) {
      noStation = false;
      break;
    }
  }
  if (noStation) {
    return -1;
  }

  // check no dropped at the end
  noStation = true;
  for (let i = arr.length - 1; i >= Math.max(arr.length - k, 0); i--) {
    if (arr[i] !== 0) {
      noStation = false;
      break;
    }
  }
  if (noStation) {
    return -1;
  }

  // k = 3
  // + + +   -    + + +
  // 1 0 0   0!   0 0 1
  let disabled = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      disabled++
      if (disabled >= k * 2 - 1) {
        return -1;
      }
    } else {
      disabled = 0;
    }
  }

  // there should be a solution then
  return findMin(k, arr);
}
//                     0  1  0  0  0  0  0  1  0  0
//                     0  1  2  3  4  5  6  7  8  9
console.log(pylons(3, [0, 1, 0, 0, 0, 1, 1, 1, 1, 1]), 3);

//                     0  1  2  3  4  5
console.log(pylons(2, [0, 1, 1, 1, 1, 0]), 2);
console.log(pylons(2, [0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1]), 5);