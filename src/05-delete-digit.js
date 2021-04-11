/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = String(n).split('');
  const arr2 = String(n).split('');
  const sortedArr = arr.sort((a, b) => {
    const c = a - b;
    return c;
  });
  const index = arr2.indexOf(sortedArr[0], 0);
  arr2.splice(index, 1);
  return Number(arr2.join(''));
}

module.exports = deleteDigit;
