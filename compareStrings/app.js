// let input = "apple apple banana  ananas banana guma";

// function checkDouble(str) {
//   const words = str.split(" "); // splits string into the array

//   const appleCount = words.filter((item) => item === "apple").length; // check occurenece of the word
//   const bananaCount = words.filter((item) => item === "banana").length;

//   return appleCount === bananaCount; // direct return of boolean
// }

// console.log(checkDouble(input));

//////////////////////////////////* USING REDUCE */////////////////////////////////////////////////

// let input = "apple apple banana ananas banana guma";

// function checkEqualOccurence(input) {
//   const counts = input.split(" ").reduce(
//     (acc, item) => {
//       if (item === "apple") acc.apple++;
//       if (item === "banana") acc.banana++;
//       return acc;
//     },
//     { apple: 0, banana: 0 }
//   );

//   return counts.apple === counts.banana;
// }

// console.log(checkEqualOccurence(input));

//////////////////////////////* MORE VERBOSE  EXAMPLE FOR BETTER UNDERSTADING */////////////////////////////

// let input = "apple apple banana ananas banana guma";

// function checkDouble(str) {
//   // Split into array of words
//   const words = str.split(" ");

//   // Create our counter object
//   let counts = { apple: 0, banana: 0 };

//   // Loop through each word
//   for (let word of words) {
//     // If it's apple, increment apple counter
//     if (word === "apple") {
//       counts.apple = counts.apple + 1;
//     }
//     // If it's banana, increment banana counter
//     if (word === "banana") {
//       counts.banana = counts.banana + 1;
//     }
//   }

//   // Check if counts are equal
//   return counts.apple === counts.banana;
// }

// console.log(checkDouble(input));

///////////////////////////////////////////////* REAL WORD USAGE */////////////////////////////////////////

const cart = [
  // array of objects !!
  { id: 1, category: "mainDish", name: "Burger" },
  { id: 2, category: "sideDish", name: "Fries" },
  { id: 3, category: "mainDish", name: "Fish" },
  { id: 4, category: "sideDish", name: "potatoes" },
];

function isCartBalanced(cart) {
  const categoryCounts = cart.reduce((acc, item) => {
    //acc starts as an empty object
    //item is each cart item one at a time

    // This line is doing a lot, so let's break it down:
    acc[item.category] = (acc[item.category] || 0) + 1;

    // Step by step, what happens inside reduce:
    // First iteration (Burger):
    // - acc is {}
    // - item.category is 'mainDish'
    // - acc['mainDish'] doesn't exist yet, so acc['mainDish'] || 0 gives us 0
    // - 0 + 1 = 1
    // - acc becomes { mainDish: 1 }

    // Second iteration (Pizza):
    // - acc is { mainDish: 1 }
    // - item.category is 'mainDish'
    // - acc['mainDish'] is 1, so acc['mainDish'] || 0 gives us 1
    // - 1 + 1 = 2
    // - acc becomes { mainDish: 2 }

    // Third iteration (Fries):
    // - acc is { mainDish: 2 }
    // - item.category is 'sideDish'
    // - acc['sideDish'] doesn't exist, so acc['sideDish'] || 0 gives us 0
    // - 0 + 1 = 1
    // - acc becomes { mainDish: 2, sideDish: 1 }

    // Fourth iteration (Salad):
    // - acc is { mainDish: 2, sideDish: 1 }
    // - item.category is 'sideDish'
    // - acc['sideDish'] is 1, so acc['sideDish'] || 0 gives us 1
    // - 1 + 1 = 2
    // - Final acc is { mainDish: 2, sideDish: 2 }

    return acc;
  }, {});

  return categoryCounts.mainDish === categoryCounts.sideDish;
}

console.log(isCartBalanced(cart));

//////////////////////////////////* SIMPLER APROACH of above *////////////////////////////////////////////

// function isCartBalancedVerbose(cart) {/
//     // Initialize our counter object
//     let counts = {
//       mainDish: 0,
//       sideDish: 0
//     };

//     // Loop through each item in cart
//     for (let item of cart) {
//       // If we find a mainDish, increment mainDish counter
//       if (item.category === 'mainDish') {
//         counts.mainDish += 1;
//       }
//       // If we find a sideDish, increment sideDish counter
//       if (item.category === 'sideDish') {
//         counts.sideDish += 1;
//       }
//     }

//     // Check if counts are equal
//     return counts.mainDish === counts.sideDish;
//   }
