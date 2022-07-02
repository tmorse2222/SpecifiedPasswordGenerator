
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Function generatePassword
function generatePassword() {
 var passwordLength = window.prompt(`Please enter a number 8-128, this will be your password length`);
 if (7 < Number(passwordLength) && Number(passwordLength) < 128) {
  var passwordCase = window.confirm(`You have selected a password lenght of : ${passwordLength}\n
  Please select "ok" if you would like to include both upper and lower case characters in your password. If you would like to use lower case only, please select cancel.`)
  if (passwordCase = true) {
    var passwordNumber = window.confirm(`You have selected both Upper and Lower case characters\n
    You have selected a password length of : ${passwordLength}\n
    Please select "ok" if you would like to include numbers in your password, please select cancel if you would like no numbers`)
    if (passwordNumber = true) {
      var passwordSpecial = window.confirm(`You have selected to include numbers, Upper case, and Lower case characters in your password\n
      You have selected a password length of : ${passwordLength}\n
      Please select "ok" if you would like to include special characters, such as !, @, #, if not please select cancel`)
      if (passwordSpecial = true) {
        return passwordLength;
      }
    }
  } else {

  }
 } else {
  generatePassword();
 }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);