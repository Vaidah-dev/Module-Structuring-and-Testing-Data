import { isProperFraction } from "../implement/2-is-proper-fraction.js";

test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

test("Basic proper fraction", () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(2, 1)).toEqual(false);
  expect(isProperFraction(-2, 1)).toEqual(false);
  expect(isProperFraction(1, -2)).toEqual(false);
});

test("Improper fraction (numerator > denominator)", () => {
  expect(isProperFraction(3, 2)).toEqual(false);
});

test("Zero cases", () => {
  expect(isProperFraction(0, 1)).toEqual(false);
  expect(isProperFraction(1, 0)).toEqual(false);
  expect(isProperFraction(0, 0)).toEqual(false);
});

test("Equal numerator and denominator", () => {
  expect(isProperFraction(1, 1)).toEqual(false);
});

test("Negative cases", () => {
  expect(isProperFraction(-2, 1)).toEqual(false);
  expect(isProperFraction(1, -2)).toEqual(false);
  expect(isProperFraction(-1, -2)).toEqual(true);
});
