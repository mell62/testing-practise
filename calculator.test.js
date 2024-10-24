import { calculator } from "./calculator";

test("calculator addition 1", () => {
  expect(calculator.add(9, 3)).toBe(12);
});

test("calculator subtraction 1", () => {
  expect(calculator.subtract(9, 3)).toBe(6);
});

test("calculator division 1", () => {
  expect(calculator.divide(9, 3)).toBe(3);
});

test("calculator multiplication 1", () => {
  expect(calculator.multiply(9, 3)).toBe(27);
});
