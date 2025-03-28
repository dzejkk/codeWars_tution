let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function reversedArray() {
  let reversed = [];

  for (let i = myArray.length - 1; i >= 0; i--) {
    console.log(myArray[i]);

    reversed.push(myArray[i]);
  }

  return reversed;
}

console.log(reversedArray());
