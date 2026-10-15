import { repeatStr } from "./repeat-str.js";

test("should repeat the string count times", () => {
  const str = "hello";
  const count = 3;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("hellohellohello");
});

test("should return the string when count is 1", () => {
  expect(repeatStr("hello", 1)).toEqual("hello");
});

test("should return an empty string when count is 0", () => {
  expect(repeatStr("hello", 0)).toEqual("");
});

test("should throw an error for negative counts", () => {
  expect(() => repeatStr("hello", -1)).toThrow();
});

test("should handle an empty string", () => {
  expect(repeatStr("", 3)).toEqual("");
});

test("should handle a single-character string", () => {
  expect(repeatStr("a", 3)).toEqual("aaa");
});
