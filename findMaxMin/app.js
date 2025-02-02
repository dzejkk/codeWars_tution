var min = function (list) {
  const MIN = Math.min(...list);

  return MIN;
};

var max = function (list) {
  const MAX = Math.max(...list);

  return MAX;
};

console.log(min([1, 2, 3, 4, 5]));
console.log(max([1, 2, 3, 4, 5]));

/*

Summary:

Functions declared with var behave differently due to hoisting and function scoping.
The spread operator (...) is needed with Math.min() because it doesn't accept an array as an argument, only individual numbers.

*/
