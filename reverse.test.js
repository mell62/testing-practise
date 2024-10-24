import { reverseString } from "./reverse";

test("reverse 1", () => {
  expect(reverseString("abcd")).toBe("dcba");
});
