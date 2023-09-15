function reverseString(inputString) {
  return inputString.split("").reverse().join("");
}

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  if (password.length < 12) {
    return false;
  }

  const lowercaseRegex = /[a-z]/;
  const uppercaseRegex = /[A-Z]/;
  const digitRegex = /[0-9]/;
  const specialCharRegex = /[!@#$%^&*()_+[\]{};':"\\|,.<>/?~]/;

  return (
    lowercaseRegex.test(password) &&
    uppercaseRegex.test(password) &&
    digitRegex.test(password) &&
    specialCharRegex.test(password)
  );
}

const reversed = reverseString("Hallo, Welt!");
console.log(reversed);

const isValidEmail = validateEmail("meine@email.com");
console.log(isValidEmail);

const isValidPassword = validatePassword("S1ch3r3sP@sswort");
console.log(isValidPassword);
