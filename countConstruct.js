const countConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return 1;

  let totalCount = 0;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const numWays = countConstruct(target.slice(word.length), wordBank, memo);
      totalCount += numWays;
    }
  }
  return (memo[target] = totalCount);
};

console.log(countConstruct("abc", ["a", "b", "abcd", "bc"]));
console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
