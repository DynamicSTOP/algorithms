// https://www.hackerrank.com/challenges/minimum-time-required/problem

/*
// first wrong on console.log(minTime([1, 4, 4, 4, 4, 4, 4], 3), 3);
// function minTime(machines: number[], goal: number): number {
//   const speedPerDay = machines.map(d => 1 / d).reduce((s, p) => s + p, 0);
//   const atLeastDays = Math.floor(goal / speedPerDay);

//   let totalProduced = 0;
//   let inWork: number[] = [];

//   // calculate where we would be at average speed
//   machines.forEach(m => {
//     totalProduced += Math.floor(atLeastDays / m);
//     inWork.push(m - atLeastDays % m);
//   });
//   console.log({ atLeastDays });
//   // if already reached
//   if (totalProduced >= goal) {
//     return atLeastDays;
//   }

//   // calculate remaining
//   let left = goal - totalProduced;
//   inWork.sort((a, b) => a - b);

//   console.log({ totalProduced, inWork });

//   for (let i = 0; i < inWork.length; i++) {
//     left--;
//     if (left <= 0) {
//       console.log({ atLeastDays, i })
//       return atLeastDays + inWork[i];
//     }
//   }

//   return 0;
// }
*/

/*
// works, but slow
function minTime(machines: number[], goal: number): number {
  if (machines.length === 0) {
    return Infinity;
  }
  let total = 0;
  let currentDay = 0;
  machines.sort((a, b) => a - b);

  do {
    currentDay++;
    machines.forEach(m => {
      if (currentDay % m === 0) {
        total++;
      }
    });
  } while (total < goal)
  return currentDay;
}
*/

function minTime(machines: number[], goal: number): number {
  if (machines.length === 0) {
    return Infinity;
  }
  machines.sort((a, b) => a - b);
  let minDays = 1;
  let maxDays = Math.ceil(goal * machines[machines.length - 1]);

  let days = Math.round(minDays + (maxDays - minDays) / 2);
  // console.log({ minDays, maxDays, days });

  while (minDays <= maxDays) {
    let products = machines.map(m => Math.floor(days / m)).reduce((o, p) => o + p, 0);
    // console.log({ minDays, maxDays, days, products, goal });
    if (products < goal) {
      minDays = days + 1;
    } else if (products >= goal) {
      maxDays = days - 1;
    }
    days = Math.round(minDays + (maxDays - minDays) / 2);
  }


  return days;
}

console.log(minTime([2, 3, 2], 10), 8);
console.log(minTime([2, 3], 5), 6);
console.log(minTime([1, 3, 4], 10), 7);
console.log(minTime([4, 5, 6], 12), 20);
console.log(minTime([1, 4, 4, 4, 4, 4, 4], 3), 3);
console.log(minTime([3], 5), 15);
console.log(minTime([1, 2], 5), 4);
