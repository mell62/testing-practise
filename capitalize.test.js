import { capitalize } from "./capitalize";

test("capitalize 1", () => {
  expect(capitalize("testString")).toBe("TestString");
});

test("capitalize 2", () => {
  expect(capitalize("stringTest")).toBe("StringTest");
});

test("capitalize 3", () => {
  expect(capitalize("AnotherTest")).toBe("AnotherTest");
});
