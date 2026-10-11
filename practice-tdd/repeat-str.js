export function repeatStr(str, count) {
  if (count < 0) {
    throw new Error("Count must be non-negative");
  }

  let result = "";
  for (let i = 0; i < count; i++) {
    result = result + str; // or: result += str;
  }
  return result;
}
