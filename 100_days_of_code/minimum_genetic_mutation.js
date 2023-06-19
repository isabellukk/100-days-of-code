// ----- Minimum Genetic Mutation ---- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/minimum-genetic-mutation/description/

var minMutation = function (startGene, endGene, bank) {
  function mutation(gene1, gene2) {
    let count = 0;
    for (let i = 0; i < 8; i++) {
      if (gene1[i] !== gene2[i]) {
        count++;
        if (count > 1) return false;
      }
    }
    return true;
  }
  let queue = [[startGene, 0]];
  let visited = new Set(startGene);
  while (queue.length) {
    let [current, distance] = queue.shift();
    if (current === endGene) return distance;

    for (let nextGene of bank) {
      if (visited.has(nextGene)) continue;
      if (!mutation(current, nextGene)) continue;
      visited.add(nextGene);
      queue.push([nextGene, distance + 1]);
    }
  }
  return -1;
};
let startGene = 'AACCGGTT';
let endGene = 'AACCGGTA';
let bank = ['AACCGGTA'];
// Expected Output: 1

console.log(minMutation(startGene, endGene, bank));
