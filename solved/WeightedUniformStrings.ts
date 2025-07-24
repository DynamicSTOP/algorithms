// https://www.hackerrank.com/challenges/weighted-uniform-string/problem

function weightedUniformStrings(s: string, queries: number[]): string[] {
  // Write your code here
  let i = 0;
  let lastCode = -1;
  let lastSumm = 0;
  const map: Record<string, boolean | undefined> = {};
  while (i < s.length) {
    const code = s.charCodeAt(i) - 96;

    if (lastCode === code) {
      lastSumm += code
    } else {
      lastSumm = code;
    }
    lastCode = code;
    // console.log(i, s[i], lastSumm);
    map[lastSumm] = true;

    i++;
  }

  return queries.map(n => map[n] ? 'YES' : 'NO');
}


console.log(weightedUniformStrings('aaabbbbcccddd', [9, 7, 8, 12, 5]));


// console.log(weightedUniformStrings('abbcccdddd', [1, 7, 5, 4, 15]));

// console.log(weightedUniformStrings('abccddde', [1, 3, 12, 5, 9, 10]));