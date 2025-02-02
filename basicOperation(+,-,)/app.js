// function basicOp(operation, value1, value2) {
//   switch (operation) {
//     case "+":
//       return value1 + value2;
//       break;
//     case "-":
//       return value1 - value2;
//       break;
//     case "*":
//       return value1 * value2;
//       break;
//     case "/":
//       return value1 / value2;

//     default:
//       return "please enter operator";
//   }
// }

// console.log(basicOp("+", 5, 8));

//////////////////////////////////* ANother aproach *//////////////////////////////

// function basicOp(operation, value1, value2) {
//   if (operation === "+") {
//     return value1 + value2;
//   } else if (operation === "-") {
//     return value1 - value2;
//   } else if (operation === "*") {
//     return value1 * value2;
//   } else if (operation === "/") {
//     return value1 / value2;
//   } else {
//     return "please enter operator";
//   }
// }

// console.log(basicOp("*", 5, 8));

/////////////////////////* Another aproach using teranry  *//////////////////////////////

// function basicOp(operation, value1, value2) {
//   return operation === "+"
//     ? value1 + value2
//     : operation === "-"
//     ? value1 - value2
//     : operation === "*"
//     ? value1 * value2
//     : operation === "/"
//     ? value1 / value2
//     : "please enter a valid operator";
// }

//console.log(basicOp("*", 5, 8));

///////////////////////* USING OBJECT *////////////////////////////////////////////

function basicOp(operation, value1, value2) {
  let cases = {
    "+": value1 + value2,
    "-": value1 - value2,
    "*": value1 * value2,
    "/": value1 / value2,
  };
  return cases[operation];
}

console.log(basicOp("+", 15, 8));
