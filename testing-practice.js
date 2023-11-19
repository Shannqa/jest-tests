function capitalize(string) {
  let firstLetter = string.slice(0, 1).toUpperCase();
  let newString = firstLetter + string.slice(1);
  return newString;
}

function reverseString(string) {
  let array = string.split("").reverse();
  let newString = array.join("");
  console.log(newString);
  return newString;
}

reverseString("kitty goes home");

module.exports.capitalize = capitalize;
module.exports.reverseString = reverseString;
