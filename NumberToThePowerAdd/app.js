/* my basic aproach*/

// function squareSum(numbers) {
//   let total = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     let squared = numbers[i] * numbers[i];

//     total += squared;
//   }
//   return total;
// }
// console.log(squareSum([1, 2]));

/* more complex aproach using reduce */

function squareSum(numbers) {
  return numbers.reduce((a, b) => a + b ** 2, 0);
}

console.log(squareSum([1, 2, 3]));
