const allConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return [[]];

  let result = [];
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank, memo);
      const targetWays = suffixWays.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }
  return (memo[target] = result);
};

console.log(allConstruct("abc", ["a", "b", "abcd", "bc"]));
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
