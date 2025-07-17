// https://www.hackerrank.com/challenges/encryption/problem



function encryption(s: string): string {
  // Write your code here
  let str = s.replace(/\s/g, '');
  const n = Math.sqrt(str.length);

  const rows = Math.floor(n);
  const cols = Math.ceil(n);

  const arrs = new Array(cols).fill('');

  for (let i = 0; i < str.length; i++) {
    arrs[i % cols] += str[i];
  }

  return arrs.join(' ');
}


console.log(encryption('feedthedog'), 'fto ehg ee dd');