// https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem

function climbingLeaderboard(ranked: number[], player: number[]): number[] {
  const ranks: number[] = [];

  const betterRanks: number[] = [];
  const map: Record<number, boolean | undefined> = {};
  ranked.forEach(r => {
    if (map[r] === undefined) {
      betterRanks.push(r);
      map[r] = true;
    }
  });

  let position = betterRanks.length + 1;
  for (let i = 0; i < player.length; i++) {
    const currentPoints = player[i];


    while (position > 1 && betterRanks[position - 2] <= currentPoints) {
      position--;
      // console.log(betterRanks[position - 2], currentPoints, position);
    }
    ranks.push(position);
  }

  // console.log(betterRanks);
  // console.log(player)

  return ranks;
}



console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]), "6 4 2 1");




