/* Return true if the given string is a palindrome. Otherwise, return false. */

function palindrome(str) {
  const regexp = /[a-z0-9]/g
  const clean = str.toLowerCase().match(regexp)
  const reversed = [...clean].reverse()
  console.log(clean, reversed);
  return clean.join("") === reversed.join("");
}

const result = palindrome("My age is 0, 0 si ega ym.");
console.log(result);
