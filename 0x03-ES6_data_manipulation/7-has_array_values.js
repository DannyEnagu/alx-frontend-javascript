export default function hasValuesFromArray(set, arr) {
  for (const xv of arr) {
    if (!set.has(xv)) {
      return false;
    }
  }

  return true;
}
