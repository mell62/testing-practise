import { capitalize } from "./capitalize";

test("test", () => {
  expect(capitalize("testString").toBe("TestString"));
});
