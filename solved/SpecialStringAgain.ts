// https://www.hackerrank.com/challenges/special-palindrome-again/problem

// A > too slow
// function check(s: string, mid: number): number {
//   let n = 1; // middle char
//   let add = 1;
//   do {
//     if (s[mid] === s[mid + add]) {
//       n++
//     }
//     if (s[mid - add] === s[mid + add] && s[mid + add] === s[mid + 1]) {
//       n++
//     }
//   } while (s[mid - add] !== undefined && s[mid + add] !== undefined);
//   return n;
// }
// 
// 
// function substrCount(n: number, s: string): number {
//   let num = 0;
//   for (let i = 0; i < s.length; i++) {
//     console.log('check', s, i);
//     num += check(s, i);
//   }
//   return num;
// }

// B > 
function substrCount(n: number, s: string): number {
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    num++;

    for (let j = i + 1; j < s.length; j++) {
      // looking at the next character
      if (s[j] === s[i]) {// just go forward as much as you can
        num++;
      } else {
        break;
      }
    }

    for (let j = 1; j < s.length; j++) {
      if (s[i + j] !== undefined // next exists
        && s[i + j] === s[i - j] // on sides are equal 
        && s[i + j] === s[i + 1] // and they are equal to first after 
        && s[i] !== s[i + j] // and they arent equal to middle (since it's first for loop)
      ) {
        num++;
      } else {
        break;
      }
    }
  }
  return num;
}


console.log(substrCount(4, 'aaaa'), 10);
// console.log(substrCount(7, 'abcbaba'), 10)