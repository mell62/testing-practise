import { caesarCipher } from "./caesarCipher";

test("simple cipher", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("lowercase wrapping cipher", () => {
  expect(caesarCipher("xyz", 5)).toBe("cde");
});

test("case preservation cipher", () => {
  expect(caesarCipher("HeLLo", 7)).toBe("OlSSv");
});

test("non-alphabetical cipher", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("uppercase wrapping cipher", () => {
  expect(caesarCipher("TUV", 10)).toBe("DEF");
});
