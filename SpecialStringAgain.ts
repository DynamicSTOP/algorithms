// https://www.hackerrank.com/challenges/special-palindrome-again/problem

// too slow

function check(s: string, mid: number): number {
  let n = 1; // middle char
  let add = 1;
  do {
    if (s[mid] === s[mid + add]) {
      n++
    }
    if (s[mid - add] === s[mid + add] && s[mid + add] === s[mid + 1]) {
      n++
    }
  } while (s[mid - add] !== undefined && s[mid + add] !== undefined);
  return n;
}


function substrCount(n: number, s: string): number {
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    console.log('check', s, i);
    num += check(s, i);
  }
  return num;
}


console.log(substrCount(4, 'aaaa'), 10);
// console.log(substrCount(7, 'abcbaba'), 10)