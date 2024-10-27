export { reverseString };

function reverseString(string) {
  let reverseArray = [];
  for (let i = string.length - 1; i >= 0; i--) {
    reverseArray.push(string[i]);
  }
  return reverseArray.join("");
}
