let fib = (number, memo = {}) => {
  if (number in memo) return memo[number];
  if (number <= 2) return 1;
  memo[number] = fib(number - 1, memo) + fib(number - 2, memo);
  return memo[number];
};

console.log(fib(7));
console.log(fib(8));
console.log(fib(13));
console.log(fib(50));
