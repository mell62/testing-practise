import { capitalize } from "./capitalize";

test("capitalize 1", () => {
  expect(capitalize("testString")).toBe("TestString");
});

test("capitalize 2", () => {
  expect(capitalize("stringTest")).toBe("StringTest");
});
