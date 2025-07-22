import fs from 'fs'

// https://www.hackerrank.com/challenges/largest-rectangle/problem
// // slow
// function largestRectangle(h: number[]): number {
//   // Write your code here

//   let max = h[0];
//   let heights: Record<number, number> = {};
//   for (let i = 0; i < h.length; i++) {
//     heights[h[i]] = 0;
//   }


//   for (let i = 0; i < h.length; i++) {
//     const cur = h[i];

//     Object.entries(heights).forEach(([heightS, number]) => {
//       const height = Number.parseInt(heightS, 10);
//       if (cur >= height) {
//         heights[height]++;
//         max = Math.max(max, height * heights[height]);
//       } else {
//         heights[height] = 0
//       }
//     })

//   }

//   return max;
// }

function largestRectangle(h: number[]): number {
  let max = 0;

  for (let i = 0; i < h.length; i++) {

    let start = i;
    let end = i;

    for (let j = i - 1; j >= 0; j--) {
      if (h[j] >= h[i]) {
        start = j;
      } else {
        break;
      }
    }

    for (let j = i + 1; j < h.length; j++) {
      if (h[j] >= h[i]) {
        end = j;
      } else {
        break;
      }
    }
    // console.log({ start: i, end, h: h[i], s: h[i] * (end - i + 1) },);  
    max = Math.max(max, h[i] * (end - start + 1));
  }
  return max;
}

console.log(largestRectangle([1, 2, 3, 4, 5]), 9);