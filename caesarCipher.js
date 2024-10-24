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
    let shiftedCode = code + shiftFactor;
    if (shiftedCode > 122) {
      shiftedCode = correctShiftedCodes(shiftedCode);
    }
    shiftedCodesArray.push(shiftedCode);
  });
  return shiftedCodesArray;
}

function correctShiftedCodes(code) {
  // wrap from z to a
  const overlimit = code - 122;
  const correctedCode = "a".charCodeAt(0) + overlimit - 1;
  return correctedCode;
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
