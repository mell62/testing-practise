export { caesarCipher };

function getCodes(string) {
  let codesArray = [];
  for (let i = 0; i < string.length; i++) {
    const code = string.charCodeAt(i);
    codesArray.push(code);
  }
  return codesArray;
}

function shiftCodes(codesArray, shiftFactor) {
  let shiftedCodesArray = [];
  codesArray.forEach((code) => {
    const shiftedCode = code + shiftFactor;
    shiftedCodesArray.push(shiftedCode);
  });
  return shiftedCodesArray;
}

function getShiftedString(shiftedCodesArray) {
  let shiftedString = "";
  shiftedCodesArray.forEach((code) => {
    const character = String.fromCharCode(code);
    shiftedString += character;
  });
  return shiftedString;
}

function caesarCipher(string, shiftFactor) {
  const codesArray = getCodes(string);
  const shiftedCodesArray = shiftCodes(codesArray, shiftFactor);
  const shiftedString = getShiftedString(shiftedCodesArray);
  return shiftedString;
}
