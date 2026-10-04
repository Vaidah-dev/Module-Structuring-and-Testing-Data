import { formatAs12HourClock } from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

test("correctly convert time after 12:00", () => {
  assert.equal(formatAs12HourClock("23:00"), "11:00 pm");
});

test("can correctly convert morning time", () => {
  assert.equal(formatAs12HourClock("08:00"), "08:00 am");
});

test("handles midnight correctly", () => {
  assert.equal(formatAs12HourClock("00:00"), "12:00 am");
});

test("handles noon correctly", () => {
  assert.equal(formatAs12HourClock("12:00"), "12:00 pm");
});

test("handles noon with minutes", () => {
  assert.equal(formatAs12HourClock("12:30"), "12:30 pm");
});

test("handles afternoon time with leading zero", () => {
  assert.equal(formatAs12HourClock("13:00"), "01:00 pm");
});

test("handles afternoon time with minutes", () => {
  assert.equal(formatAs12HourClock("23:45"), "11:45 pm");
});

test("handles early morning with leading zero", () => {
  assert.equal(formatAs12HourClock("01:00"), "01:00 am");
});

test("handles just before noon", () => {
  assert.equal(formatAs12HourClock("11:59"), "11:59 am");
});
