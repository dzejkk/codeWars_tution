// function betterThanAverage(classPoints, yourPoints) {
//   return (
//     yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length
//   );
// }

// console.log(betterThanAverage([2, 3], 5));

/* SIMPLE APROACH */

function betterThanAverage(classPoints, yourPoints) {
  let sum = 0;

  for (let i = 0; i < classPoints.length; i++) {
    sum += classPoints[i];
  }

  console.log(sum / classPoints.length);

  return sum / classPoints.length < yourPoints;
}

console.log(betterThanAverage([1, 2, 3], 5));
