const { capitalize } = require("./testing-practice.js");
const { reverseString } = require("./testing-practice.js");
const { calculator } = require("./testing-practice.js");
const { caesarCipher } = require("./testing-practice.js");
const { analyzeArray } = require("./testing-practice.js");

test("capitalize the first letter of a string", () => {
  expect(capitalize("go home")).toBe("Go home");
});

test("reverse letters in a string", () => {
  expect(reverseString("kitty")).toBe("yttik");
});

test("calculate the sum of two numbers", () => {
  expect(calculator.sum(1, 4)).toBe(5);
});

test("calculate the substraction of two numbers", () => {
  expect(calculator.substract(5, 2)).toBe(3);
});

test("calculate the division of two numbers", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("calculate the multiplication of two numbers", () => {
  expect(calculator.multiply(8, 3)).toBe(24);
});

test("encode the string using caesar code and the specified shift", () => {
  expect(
    caesarCipher(5, "happiness is a choice that requires effort at times.")
  ).toBe("mfuunsjxx nx f hmtnhj ymfy wjvznwjx jkktwy fy ynrjx.");
});

test("analyze an array of numbers, return an object with properties average, min, max, length", () => {
  expect(analyzeArray([77, 24, 14, 66, 53, 12])).toStrictEqual({
    average: 41,
    min: 12,
    max: 77,
    length: 6,
  });
});
