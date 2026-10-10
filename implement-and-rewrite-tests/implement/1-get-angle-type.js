export function getAngleType(angle) {
  if (angle <= 0 || angle >= 360) {
    return "Invalid angle";
  }
  if (angle < 90) {
    return "Acute angle";
  }
  if (angle === 90) {
    return "Right angle";
  }
  if (angle < 180) {
    return "Obtuse angle";
  }
  if (angle === 180) {
    return "Straight angle";
  }
  return "Reflex angle";
}
