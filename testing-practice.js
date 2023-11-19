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

const calculator = {
  sum: function (num1, num2) {
    return num1 + num2;
  },
  substract: function (num1, num2) {
    return num1 - num2;
  },
  divide: function (num1, num2) {
    return num1 / num2;
  },
  multiply: function (num1, num2) {
    return num1 * num2;
  },
};

function caesarCipher(shift, string) {
  let encodedString = "";
  let shiftedLetter;
  for (let i = 0; i < string.length; i++) {
    // A-Z codes 65-90
    // a-z codes 97-122

    let plain = string.charCodeAt(i);
    if (plain >= 65 && plain <= 90) {
      shiftedLetter = ((plain - 65 + shift) % 26) + 65;
      let encodedLetter = String.fromCharCode(shiftedLetter);
      encodedString += encodedLetter;
    } else if (plain >= 97 && plain <= 122) {
      shiftedLetter = ((plain - 97 + shift) % 26) + 97;
      let encodedLetter = String.fromCharCode(shiftedLetter);
      encodedString += encodedLetter;
    } else {
      encodedString += string[i];
    }
  }
  return encodedString;
}

function analyzeArray(array) {
  function minimum(array) {
    let min = array[0];
    array.forEach((number) => {
      if (number < min) {
        min = number;
      }
    });
    return min;
  }

  function maximum(array) {
    let max = array[0];
    array.forEach((number) => {
      if (number > max) {
        max = number;
      }
    });
    return max;
  }

  function average(array) {
    let sum = array.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    return sum / array.length;
  }

  const object = {
    average: average(array),
    min: minimum(array),
    max: maximum(array),
    length: array.length,
  };

  return object;
}

console.log(analyzeArray([77, 24, 14, 66, 53, 12]));

module.exports.capitalize = capitalize;
module.exports.reverseString = reverseString;
module.exports.calculator = calculator;
module.exports.caesarCipher = caesarCipher;
module.exports.analyzeArray = analyzeArray;
