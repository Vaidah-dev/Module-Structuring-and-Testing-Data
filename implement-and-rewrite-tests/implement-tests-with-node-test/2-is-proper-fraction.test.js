import assert from "node:assert";
import test from "node:test";

import { isProperFraction } from "../implement/2-is-proper-fraction.js";

test("Improper fraction (numerator > denominator)", () => {
  assert.equal(isProperFraction(3, 2), false);
});

test("Zero cases", () => {
  assert.equal(isProperFraction(0, 1), true);
  assert.equal(isProperFraction(1, 0), false);
  assert.equal(isProperFraction(0, 0), false);
});

test("Equal numerator and denominator", () => {
  assert.equal(isProperFraction(1, 1), false);
});

test("Negative cases", () => {
  assert.equal(isProperFraction(-2, 1), true);
  assert.equal(isProperFraction(1, -2), false);
  assert.equal(isProperFraction(-1, -2), false);
});

test("Basic proper fraction", () => {
  // Example: 1/2 is a proper fraction
  assert.equal(isProperFraction(1, 2), true);
});
