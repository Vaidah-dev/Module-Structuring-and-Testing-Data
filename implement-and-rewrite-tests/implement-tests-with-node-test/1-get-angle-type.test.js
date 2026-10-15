import assert from "node:assert";
import test from "node:test";

import { getAngleType } from "../implement/1-get-angle-type.js";

test("Classifies right angle", () => {
  assert.equal(getAngleType(90), "Right angle");
});

test("Classifies acute angles", () => {
  assert.equal(getAngleType(45), "Acute angle");
  assert.equal(getAngleType(1), "Acute angle"); // just inside
  assert.equal(getAngleType(89), "Acute angle"); // just before 90
});

test("Classifies obtuse angles", () => {
  assert.equal(getAngleType(140), "Obtuse angle");
  assert.equal(getAngleType(91), "Obtuse angle"); // just after 90
  assert.equal(getAngleType(179), "Obtuse angle"); // just before 180
});

test("Classifies straight angle", () => {
  assert.equal(getAngleType(180), "Straight angle");
});

test("Classifies reflex angles", () => {
  assert.equal(getAngleType(250), "Reflex angle");
  assert.equal(getAngleType(181), "Reflex angle"); // just after 180
  assert.equal(getAngleType(359), "Reflex angle"); // just before 360
});

test("Classifies invalid angles", () => {
  assert.equal(getAngleType(-1), "Invalid angle");
  assert.equal(getAngleType(0), "Invalid angle"); // edge
  assert.equal(getAngleType(360), "Invalid angle"); // edge
  assert.equal(getAngleType(400), "Invalid angle");
});
