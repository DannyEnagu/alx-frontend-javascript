export default function cleanSet(set, startString) {
  const tempArr = new Array();
  for (const string of set) {
    if (string.includes(startString)) {
      tempArr.push(string.replace(startString, ''));
    }
  }

  return tempArr.join('-');
}