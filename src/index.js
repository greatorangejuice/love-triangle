/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  let index = preferences.length;

  for (let i = 0; i < index; i++) {
    let m = preferences[i]; // 2
    let n = preferences[m-1]; // 3
    let k = preferences[n-1]; // 1

    if ( m-1 == i && n == i ) {
      count++
    }

    // if ( preferences[] == )

    if ( preferences[k-1] == m && preferences[n-1] == )
    // Сравниваю значение с индексом. То есть число K == индексу M. Значение M == индексу N. 
    // Значение N == индексу K.
  }
  return count;
};
// indexOf!!!

m  n  k
2, 3, 1, 5, 6, 4

1  2  3  4  5  6


// Если индекс двойки равен значению единицы ...



//  индекс: n k m
//значение: k m n