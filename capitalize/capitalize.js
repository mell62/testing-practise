export { capitalize };

function capitalize(string) {
  let capitalizedString;
  capitalizedString = string.charAt(0).toUpperCase();
  capitalizedString += string.slice(1);
  return capitalizedString;
}
