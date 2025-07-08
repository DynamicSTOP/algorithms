// https://www.hackerrank.com/challenges/fraudulent-activity-notifications/problem


const findBinary = (sorted: number[], num: number): number => {
  let left = 0;
  let right = sorted.length - 1;
  let index = 0;

  while (left <= right) {
    const mIndex = Math.floor((right + left) / 2);
    const mValue = sorted[mIndex];
    if (mValue === num) {
      return mIndex;
    }
    if (mValue < num) {
      left = mIndex + 1;
    }
    if (mValue > num) {
      right = mIndex - 1;
    }
    index = mIndex;
  }
  return index;
}

const getDoubleMedian = (arr: number[]): number => {
  if (arr.length % 2 === 0) {
    return (arr[arr.length / 2] + arr[arr.length / 2 - 1])
  } else {
    return arr[Math.floor(arr.length / 2)] * 2;
  }
}

function activityNotifications(expenditure: number[], d: number): number {
  // Write your code here
  let notifications = 0;

  if (expenditure.length < d) {
    return notifications;
  }

  let sorted: number[] = expenditure.slice(0, d).sort((a, b) => a - b);

  for (let i = d; i < expenditure.length; i++) {
    const today = expenditure[i];
    const dMed = getDoubleMedian(sorted);

    if (today >= dMed) {
      notifications++;
    }
    // remove
    sorted.splice(findBinary(sorted, expenditure[i - d]), 1);

    // add
    sorted.splice(findBinary(sorted, today), 0, today);
  }

  return notifications;
}

// console.log(findBinary([2, 3, 3, 4], 6));

console.log(activityNotifications([10, 20, 30, 40, 50], 3), 1);
console.log(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5), 2);
console.log(activityNotifications([1, 2, 3, 4, 4], 4), 0);