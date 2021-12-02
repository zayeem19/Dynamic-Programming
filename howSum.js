let howSum = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  for (let num of numbers) {
    remainder = target - num;
    const result = howSum(remainder, numbers, memo);
    if (result !== null) {
      memo[target] = [...result, num];
      return memo[target];
    }
  }
  memo[target] = null;
  return null;
};

console.log(howSum(300, [7, 14]));
