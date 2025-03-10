/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const ar1 = s1.split('');
  const ar2 = s2.split('');
  for (let i = 0; i < ar2.length; i += 1) {
    const index = ar2.indexOf(ar1[i]);
    if (index > -1) {
      count += 1;
      ar2[index] = '';
    }
  }
  return count;
}

module.exports = getCommonCharacterCount;
