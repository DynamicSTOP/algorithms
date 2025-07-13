// https://www.hackerrank.com/challenges/funny-string/problem


function funnyString(s: string): string {
  // Write your code here
  for (let i = 0; i < Math.ceil((s.length - 1) / 2); i++) {
    // console.log(s[i], s[i + 1]);
    // console.log(s[s.length - 1 - i], s[s.length - 2 - i]);

    const d1 = Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
    const d2 = Math.abs(s.charCodeAt(s.length - 1 - i) - s.charCodeAt(s.length - 2 - i));
    if (d1 !== d2) {
      return 'Not Funny';
    }

  }
  return "Funny";
}


console.log(funnyString('acxz'), 'Funny');
console.log(funnyString('bcxz'), 'Not Funny');