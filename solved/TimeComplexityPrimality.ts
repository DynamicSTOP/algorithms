function primality(n: number): string {
  // Write your code here
  if (n < 2) {
    return 'Not prime';
  }
  const max = Math.floor(Math.sqrt(n));
  // console.log({max});
  for (let i = 2; i <= max; i++) {
    if (n % i === 0) {
      return 'Not prime'
    }
  }

  return 'Prime';
}

[1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400, 441, 484, 529, 576, 625, 676, 729, 784, 841, 907].forEach(n => console.log(n, primality(n)));