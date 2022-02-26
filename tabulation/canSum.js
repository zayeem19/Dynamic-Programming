const canSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= targetSum; i++) {
    for (let num of numbers) {
      if (table[i] === true) {
        table[i + num] = true;
      }
    }
  }
  return table[targetSum];
};

console.log(canSum(7, [5, 6, 4, 3, 7]));
