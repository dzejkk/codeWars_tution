function replaceCharacter(string) {
  let splitted = string.split("");

  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i] === "0") splitted[i] = "O";
    // pozor , musi to byt string pretoze si rozlozil string nie cislo !!!!!
    else if (splitted[i] === "1") splitted[i] = "I";
    else if (splitted[i] === "5") splitted[i] = "S";
  }
  return splitted.join("");
}

console.log(replaceCharacter("DAN0"));
console.log(replaceCharacter("1gor"));
console.log(replaceCharacter("5ebastian"));
