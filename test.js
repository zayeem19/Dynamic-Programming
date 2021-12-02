// const foo = (n, memo = {}) => {
//   if (n in memo) return memo[n];
//   if (n <= 2) return 1;
//   memo[n] = foo(n - 1, memo) + foo(n - 2, memo);
//   return memo[n];
// };

// const foo = (n, m, memo = {}) => {
//   let key = n + "," + m;
//   if (key in memo) return memo[key];
//   if (n === 1 && m === 1) return 1;
//   if (n === 0 || m === 0) return 0;

//   memo[key] = foo(n - 1, m, memo) + foo(n, m - 1, memo);
//   return memo[key];
// };

// const foo = (target, numbers, memo = {}) => {
//   if (target in memo) return memo[target];
//   if (target === 0) return true;
//   if (target < 0) return false;

//   for (let num of numbers) {
//     remainder = target - num;
//     if (foo(remaimder, numbers, memo) === true) {
//       return (memo[target] = true);
//     }
//   }
//   return (memo[target] = false);
// };

// const foo = (target, remainder, memo = {}) => {
//   if (target in memo) return memo[target];
//   if (target === 0) return [];
//   if (target < 0) return null;

//   for (let num of numbers) {
//     remainder = target - num;
//     const result = foo(remainder, numbers, memo);
//     if (result !== null) {
//       memo[target] = [...result, num];
//       return memo[target];
//     }
//   }
//   return (memo[target] = null);
// };
