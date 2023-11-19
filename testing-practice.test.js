const { capitalize } = require("./testing-practice.js");
const { reverseString } = require("./testing-practice.js");

test("capitalize the first letter of a string", () => {
  expect(capitalize("go home")).toBe("Go home");
});

test("reverse letters in a string", () => {
  expect(reverseString("kitty")).toBe("yttik");
});
