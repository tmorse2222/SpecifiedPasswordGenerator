
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Function generatePassword
function generatePassword() {
  window.prompt(`Please enter a number 8-128, this will be your password length`);

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);