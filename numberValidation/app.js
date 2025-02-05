/* Simpler solution */

// function validatePIN(pin) {

// najpv ceknut dlzku retazca

//     if (pin.length !== 4 && pin.length !== 6) {
//         return false;
//     }

// potom ceknut ci su vsetky znaky cisla

//     for (let i = 0; i < pin.length; i++) {
//         if (pin[i] < '0' || pin[i] > '9') {
//             return false;
//         }
//     }

//     return true;
// }

/*More complex solution with Array.from()*/

function validatePIN(pin) {
  const isValidLength = pin.length === 4 || pin.length === 6;
  const isNumeric = Array.from(pin).every((char) => char >= "0" && char <= "9");
  return isValidLength && isNumeric;
}

console.log(validatePIN("1234"));
console.log(validatePIN("12345"));
console.log(validatePIN("a234"));
console.log(validatePIN("123456"));
