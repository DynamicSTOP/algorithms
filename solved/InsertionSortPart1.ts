// https://www.hackerrank.com/challenges/insertionsort1/problem

function insertionSort1(n: number, arr: number[]): void {
  // Write your code here
  let i = arr.length;
  let num = arr[arr.length - 1];
  for (i = arr.length - 1; i >= 0; i--) {
    // console.log(i);
    if (arr[i - 1] > num) {
      arr[i] = arr[i - 1];
      console.log(arr.join(' '));
    } else {
      arr[i] = num;
      console.log(arr.join(' '));
      break;
    }
  }
}

console.log(insertionSort1(5, [2, 3, 4, 5, 6, 7, 8, 9, 10, 1]));
// console.log('test')