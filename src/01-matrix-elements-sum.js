/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let res = 0;
  const arr = matrix.slice();
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      if (arr[i][j] !== 0) {
        res += arr[i][j];
      } else if (arr[i][j] === 0 && i + 1 !== arr.length) {
        arr[i + 1][j] = 0;
      }
    }
  }
  return res;
}

module.exports = getMatrixElementsSum;
