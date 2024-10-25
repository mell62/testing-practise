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
