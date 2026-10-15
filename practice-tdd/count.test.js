// implement a function countChar that counts the number of times a character occurs in a string
import { countChar } from "./count.js";

test("should count multiple occurrences of a character", () => {
  const str = "aaaaa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});

test("should return 0 when character is not in the string", () => {
  const str = "hello";
  const char = "z";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

test("should count multiple occurrences in a mixed string", () => {
  expect(countChar("banana", "a")).toEqual(3);
  expect(countChar("hello world", "l")).toEqual(3);
});

test("should return 0 when the string is empty", () => {
  expect(countChar("", "a")).toEqual(0);
});
