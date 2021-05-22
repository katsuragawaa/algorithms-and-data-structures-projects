/* Return true if the passed string looks like a valid US phone number.
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555 */ 

function telephoneCheck(str) {
  const phoneReg = /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}$/
  return phoneReg.test(str)
}

const result = telephoneCheck("1 (555) 555-5555");
console.log(result);
