/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  const result = preferences.reduce((acc, firstNumber, i) => {
    secondNumber = preferences[firstNumber - 1] - 1;
    trirdNumber = preferences[secondNumber] - 1;
    return ((trirdNumber === i) ? acc + 1 : acc);
  }, 0);
  return result/3^0;
};