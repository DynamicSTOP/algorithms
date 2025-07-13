// https://www.hackerrank.com/challenges/balanced-brackets/problem

const openings: Record<string, string | undefined> = {
  '}': '{',
  ']': '[',
  ')': '(',
}

function isBalanced(s: string): string {
  // Write your code here

  const arr: string[] = [];

  const chars = s.split('');
  for (let i = 0; i < chars.length; i++) {
    const c = chars[i];
    const lastArr = arr.at(-1);
    if (['}', ']', ')'].includes(c)) {
      if (lastArr === openings[c]) {
        arr.pop();
      } else {
        return 'NO';
      }
    }
    else {
      arr.push(c);
    }
  }
  return arr.length === 0 ? 'YES' : 'NO';
}

console.log(isBalanced('{[()]}'), 'YES');
console.log(isBalanced('{[(])}'), 'NO');
console.log(isBalanced('{{[[(())]]}}'), 'YES');
