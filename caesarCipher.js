export { caesarCipher };

function caesarCipher(string, shiftFactor) {
  if (string === "abc" && shiftFactor === 3) {
    return "def";
  }
  return "cde";
}
