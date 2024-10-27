export { analyzeArray };

function getLength(array) {
  let length = 0;
  array.forEach((num) => {
    length += 1;
  });
  return length;
}

function getAverage(array, length) {
  let sum = 0;
  array.forEach((num) => {
    sum += num;
  });
  const average = sum / length;
  return average;
}

function getMin(array) {
  let min = array[0];
  array.forEach((num) => {
    if (num < min) {
      min = num;
    }
  });
  return min;
}

function getMax(array) {
  let max = array[0];
  array.forEach((num) => {
    if (num > max) {
      max = num;
    }
  });
  return max;
}

function analyzeArray(array) {
  const length = getLength(array);
  const average = getAverage(array, length);
  const min = getMin(array);
  const max = getMax(array);
  return { average, min, max, length };
}
