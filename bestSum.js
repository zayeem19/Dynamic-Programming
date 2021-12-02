const bestSum = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  let shortestCombination = null;
  for (let num of numbers) {
    remainder = target - num;
    const remainderCombination = bestSum(remainder, numbers, memo);
    if (remainderCombination !== null) {
      let combination = [...remainderCombination, num];
      if (
        shortestCombination === null ||
        shortestCombination.length > combination.length
      ) {
        shortestCombination = combination;
      }
    }
  }
  return (memo[target] = shortestCombination);
};

console.log(bestSum(6, [1, 2, 3]));
console.log(bestSum(100, [1, 2, 25]));
