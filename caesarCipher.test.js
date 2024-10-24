import { caesarCipher } from "./caesarCipher";

test("cipher 1", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("cipher 2", () => {
  expect(caesarCipher("xyz", 5)).toBe("cde");
});

test("cipher 3", () => {
  expect(caesarCipher("HeLLo", 7)).toBe("OlSSv");
});
