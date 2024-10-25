import { analyzeArray } from "./analyzeArray";

test("analyze 1", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("analyze 2", () => {
  expect(analyzeArray([55, -62, 12, 0])).toEqual({
    average: 1.25,
    min: -62,
    max: 55,
    length: 4,
  });
});

test("analyze 3", () => {
  expect(
    analyzeArray([0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30])
  ).toEqual({
    average: 15,
    min: 0,
    max: 30,
    length: 16,
  });
});
