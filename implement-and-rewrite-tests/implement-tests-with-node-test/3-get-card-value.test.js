import assert from "node:assert";
import test from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

test("Valid single-digit card", () => {
  assert.equal(getCardValue("9♠"), 9);
});

test("Arbitrary non-card string", () => {
  assert.throws(
    () => getCardValue("invalid"),
    /Expected a number followed by a suit, but got "invalid"/,
    "Expected clear error"
  );
});

test("Ace returns 11", () => {
  assert.equal(getCardValue("A♠"), 11);
  assert.equal(getCardValue("A♥"), 11);
});

test("Face cards return 10", () => {
  assert.equal(getCardValue("J♠"), 10);
  assert.equal(getCardValue("Q♥"), 10);
  assert.equal(getCardValue("K♦"), 10);
});

test("Number cards return their value", () => {
  assert.equal(getCardValue("2♣"), 2);
  assert.equal(getCardValue("5♥"), 5);
  assert.equal(getCardValue("7♠"), 7);
  assert.equal(getCardValue("10♦"), 10);
});

test("Invalid cards throw an error", () => {
  assert.throws(
    () => getCardValue("A"),
    /Expected a number followed by a suit, but got "A"/
  );
  assert.throws(
    () => getCardValue("♠"),
    /Expected a number followed by a suit, but got "♠"/
  );
  assert.throws(
    () => getCardValue("11♠"),
    /Expected a number followed by a suit, but got "11♠"/
  );
  assert.throws(
    () => getCardValue("1♠"),
    /Expected a number followed by a suit, but got "1♠"/
  );
  assert.throws(
    () => getCardValue("hello"),
    /Expected a number followed by a suit, but got "hello"/
  );
  assert.throws(
    () => getCardValue(""),
    /Expected a number followed by a suit, but got ""/
  );
  assert.throws(
    () => getCardValue("A♠♠"),
    /Expected a number followed by a suit, but got "A♠♠"/
  );
});
