// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

function rot13(str) {
  return str.replace(/[A-Z]/g, (letter) =>
    String.fromCharCode((letter.charCodeAt(0) % 26) + 65)
  );
}

const result = rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
console.log(result);
