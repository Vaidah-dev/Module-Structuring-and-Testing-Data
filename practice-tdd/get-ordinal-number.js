export function getOrdinalNumber(num) {
  const numString = num.toString();

  if (
    numString.endsWith("11") ||
    numString.endsWith("12") ||
    numString.endsWith("13")
  ) {
    return `${num}th`;
  } else if (numString.endsWith("1")) {
    return `${num}st`;
  } else if (numString.endsWith("2")) {
    return `${num}nd`;
  } else if (numString.endsWith("3")) {
    return `${num}rd`;
  } else {
    return `${num}th`;
  }
}
