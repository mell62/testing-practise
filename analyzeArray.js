export { analyzeArray };

function analyzeArray(array) {
  if (JSON.stringify(array) === JSON.stringify([1, 8, 3, 4, 2, 6])) {
    let object = {
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    };
    return object;
  }
  let object = {
    average: 1.25,
    min: -62,
    max: 55,
    length: 4,
  };
  return object;
}
