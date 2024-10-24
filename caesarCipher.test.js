import { caesarCipher } from "./caesarCipher";

test("cipher 1", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});
