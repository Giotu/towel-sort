
// You should implement your task here.

module.exports = function towelSort(matrix = []) {
  const result = [];

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2) {
      result.push(...matrix[i].sort((a, b) => b - a));
    }
    else {
      result.push(...matrix[i]);
    }
  }

  return result;
}

