// https://www.hackerrank.com/challenges/palindrome-index/problem


// bcbc -> cbc or bcb
function palindromeIndex(s: string): number {
  const arr = s.split('');

  // Write your code here
  if (arr.slice().reverse().join('') === s) {
    return -1;
  }


  for (let i = 0; i < Math.ceil(s.length / 2); i++) {
    if (arr[i] === arr[s.length - 1 - i]) {
      continue;
    }
    let c = arr.slice();
    c.splice(i, 1);
    if (c.join('') === c.slice().reverse().join('')) {
      return i;
    }

    c = arr.slice();
    c.splice(s.length - 1 - i, 1);

    if (c.join('') === c.slice().reverse().join('')) {
      return s.length - 1 - i;
    }
    return -1;
  }
  return -1;
}
console.log(palindromeIndex('aaab'), 3);
console.log(palindromeIndex('baa'), 0);
console.log(palindromeIndex('aaa'), -1);


console.log(palindromeIndex('aaaa'), -1);
console.log(palindromeIndex('aaba'), 0);
console.log(palindromeIndex('aabaa'), -1);
console.log(palindromeIndex('abcd'), -1);
