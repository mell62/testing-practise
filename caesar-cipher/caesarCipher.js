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
    if (code < 65 || (code > 90 && code < 97) || code > 122) {
      // to ignore non-alphabets
      shiftedCodesArray.push(code);
    } else {
      let shiftedCode = code + shiftFactor;
      if (shiftedCode > 122) {
        shiftedCode = correctShiftedCodesLowerCase(shiftedCode);
      }
      if (shiftedCode > 90 && code < 91) {
        shiftedCode = correctShiftedCodesUpperCase(shiftedCode);
      }
      shiftedCodesArray.push(shiftedCode);
    }
  });
  return shiftedCodesArray;
}

function correctShiftedCodesLowerCase(code) {
  // wrap from z to a
  const overlimit = code - 122;
  const correctedCode = "a".charCodeAt(0) + overlimit - 1;
  return correctedCode;
}

function correctShiftedCodesUpperCase(code) {
  // wrap from Z to A
  const overlimit = code - 90;
  const correctedCode = "A".charCodeAt(0) + overlimit - 1;
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
  shiftFactor %= 26; // if shiftfactor is big
  const codesArray = getCodes(string);
  const shiftedCodesArray = shiftCodes(codesArray, shiftFactor);
  const shiftedString = getShiftedString(shiftedCodesArray);
  return shiftedString;
}
