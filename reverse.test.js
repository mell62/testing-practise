import { reverseString } from "./reverse";

test("reverse 1", () => {
  expect(reverseString("abcd")).toBe("dcba");
});

test("reverse 2", () => {
  expect(reverseString("mood")).toBe("doom");
});
