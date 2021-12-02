let canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    let remainder = targetSum - num;
    if (canSum(remainder, numbers, memo) === true) {
      return (memo[targetSum] = true);
    }
  }
  return (memo[targetSum] = false);
};

console.log(canSum(7, [3, 4]));
console.log(canSum(80, [3, 4]));
console.log(canSum(300, [3, 4]));
