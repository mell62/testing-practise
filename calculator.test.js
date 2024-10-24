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

test("calculator addition 2", () => {
  expect(calculator.add(15.6, 25.2)).toBe(40.8);
});

test("calculator subtraction 2", () => {
  expect(calculator.subtract(15.6, 25.2)).toBe(-9.6);
});

test("calculator division 2", () => {
  expect(calculator.divide(15.6, 25.2)).toBeCloseTo(0.61);
});

test("calculator multiplication 2", () => {
  expect(calculator.multiply(15.6, 25.2)).toBe(393.12);
});
