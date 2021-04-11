/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const res2 = [];
  const res = arr.slice();
  const sortedArr = res.sort((a, b) => {
    const c = a - b;
    return c;
  });
  sortedArr.splice(0, sortedArr.lastIndexOf(-1) + 1);
  console.log(`res2  ${res2}`);
  for (let i = 0, j = 0; i < arr.length; i += 1) {
    if (arr[i] !== -1) {
      res2.push(sortedArr[j]);
      j += 1;
    } else {
      res2.push(-1);
    }
  }
  return res2;
}

module.exports = sortByHeight;
