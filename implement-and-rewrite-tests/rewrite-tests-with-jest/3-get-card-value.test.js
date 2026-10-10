import { getCardValue } from "../implement/3-get-card-value.js";

test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
  expect(getCardValue("A♥")).toEqual(11);
});

test(`Should return the number for number cards`, () => {
  expect(getCardValue("2♣")).toEqual(2);
  expect(getCardValue("5♥")).toEqual(5);
  expect(getCardValue("7♠")).toEqual(7);
  expect(getCardValue("10♦")).toEqual(10);
});

test(`Should return 10 for face cards`, () => {
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("Q♥")).toEqual(10);
  expect(getCardValue("K♦")).toEqual(10);
});

test(`Should throw for invalid cards`, () => {
  expect(() => getCardValue("A")).toThrow();
  expect(() => getCardValue("♠")).toThrow();
  expect(() => getCardValue("11♠")).toThrow();
  expect(() => getCardValue("hello")).toThrow();
  expect(() => getCardValue("")).toThrow();
  expect(() => getCardValue("A♠♠")).toThrow();
});
