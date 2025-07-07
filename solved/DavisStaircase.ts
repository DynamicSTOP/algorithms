// https://www.hackerrank.com/challenges/ctci-recursive-staircase/problem

const memory: Record<number, number> = {}
function stepPerms(n: number): number {
  // Write your code here
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  if (n === 3) {
    return 4;
  }
  const old = memory[n];
  if (old !== undefined) {
    return old;
  }
  const v = stepPerms(n - 1) + stepPerms(n - 2) + stepPerms(n - 3);
  memory[n] = v;
  return v;
}

console.log(stepPerms(1), 1);
console.log(stepPerms(3), 4);
console.log(stepPerms(7), 44);
