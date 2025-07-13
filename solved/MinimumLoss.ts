// https://www.hackerrank.com/challenges/minimum-loss/problem

// too slow
// function minimumLoss(price: number[]): number {
//   // Write your code here

//   let priceToYear: Record<number, number | undefined> = {};
//   let max = 0;
//   let min = Infinity
//   price.forEach((p, i) => {
//     priceToYear[p] = i;
//     max = Math.max(p, max);
//   });


//   for (let curPrice = max; curPrice > 0; curPrice--) {
//     const curPriceYear = priceToYear[curPrice];
//     if (curPriceYear === undefined) {
//       continue;
//     }
//     for (let cheaper = curPrice - 1; cheaper > Math.max(0, curPrice - min); cheaper--) {
//       const cheapYear = priceToYear[cheaper];
//       if (cheapYear === undefined || cheapYear < curPriceYear) {
//         continue;
//       }
//       min = Math.min(curPrice - cheaper);
//       if (min === 1) {
//         return min;
//       }
//     }
//   }
//   return min;
// }

function minimumLoss(price: number[]): number {
  let min = Infinity;
  const arr = price.map((p, i) => ({ p, i })).sort((b, a) => a.p - b.p);


  for (let i = 0; i < arr.length - 1; i++) {
    const cur = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const cheaper = arr[j];
      if (cheaper.i < cur.i) {
        continue;
      }
      const diff = cur.p - cheaper.p;
      if (diff < min) {
        min = diff;
      } else if (diff > min) {
        break;
      }
    }
  }


  return min;
}

console.log(minimumLoss([5, 10, 3]), 2);

console.log(minimumLoss([20, 7, 8, 2, 5]), 2);