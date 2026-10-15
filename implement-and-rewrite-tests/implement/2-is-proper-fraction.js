export function isProperFraction(numerator, denominator) {
  const value = numerator / denominator;
  return value > 0 && value < 1;
}
