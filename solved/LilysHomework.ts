// https://www.hackerrank.com/challenges/lilys-homework/problem


function lily(arr: number[]): number {
  const myarr = arr.slice(0);
  const sorted = arr.slice(0).sort((a, b) => a - b);

  const should: Record<number, number> = {};
  const was: Record<number, number> = {};

  myarr.forEach((n, i) => {
    was[n] = i;
  });
  sorted.forEach((n, i) => {
    should[n] = i;
  });

  let steps = 0;
  for (let i = 0; i < myarr.length; i++) {
    // console.log(i, myarr.slice(), steps)
    // go over each element
    if (sorted[i] === myarr[i]) {
      continue;
    }

    const wasNum = myarr[i];
    const shouldBe = sorted[i];
    const takenFrom = was[shouldBe];

    // console.log(i, 'was', wasNum, 'shouldBe', shouldBe);
    // put sorted one to that place
    myarr[i] = shouldBe;
    myarr[takenFrom] = wasNum
    was[wasNum] = takenFrom;

    steps++;
  }


  return steps;
}


function lilysHomework(arr: number[]): number {
  return Math.min(lily(arr), lily(arr.slice(0).reverse()))
}

console.log(lilysHomework([3, 4, 2, 5, 1]), 2);
//[3, 4, 2, 5, 1]
//[3, 4, 2, 5, 1]
//[3, 4, 2, 5, 1]

// console.log(lilysHomework([2, 5, 3, 1]), 2);