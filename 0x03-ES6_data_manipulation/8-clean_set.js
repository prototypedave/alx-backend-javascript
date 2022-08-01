export default function cleanSet(set, startString) {
  let newString = '';
  if (!startString || !startString.length) return newString;
  set.forEach((i) => {
    if (i && i.startsWith(startString)) newString += `${i.slice(startString.length)}-`;
  });
  return newString.slice(0, newString.length - 1);
}
