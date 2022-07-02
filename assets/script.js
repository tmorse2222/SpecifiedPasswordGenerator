
// Assignment code here
var lower = `abcdefghijklmnopqrstuvwxyz`;
var upper = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
var numbers = `0123456789`;
var symbols = `!@#$%^&*_-+=`;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Function generatePassword
function generatePassword() {
 var passwordLength = window.prompt(`Please enter a number 8-128, this will be your password length`);
 if (7 < Number(passwordLength) && Number(passwordLength) < 128) {
  var passwordCase = window.confirm(`Your password will contain : ${passwordLength} characters\n
  Please select "ok" if you would like to include both upper and lower case characters in your password. If you would like to use lower case only, please select cancel.`)
  if (passwordCase = true) {
    var passwordNumber = window.confirm(`You have selected both Upper and Lower case characters\n
    Your password will contain : ${passwordLength} characters\n
    Please select "ok" if you would like to include numbers in your password, please select cancel if you would like no numbers`)
    if (passwordNumber = true) {
      var passwordSpecial = window.confirm(`You have selected to include numbers, Upper case, and Lower case characters in your password\n
      Your password will contain : ${passwordLength} characters\n
      Please select "ok" if you would like to include special characters, such as !, @, #, if not please select cancel`)
      if (passwordSpecial = true) {
        var passwordConfirm = window.confirm(`You have selected a password that will contain special characters, numbers, upper, and lower case characters\n
        Your password will contain : ${passwordLength} characters\n
        To confirm, please select "ok", to start over, please select "cancel"`)

        if (passwordConfirm == true){

          var characters = `${lower}${upper}${numbers}${symbols}`
          var result = ``
          
          for ( var i = 0; i < passwordLength; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * 75));
          }

          return result;

        } else {
         window.confirm(`Password generator cancelled, Select button to start over`)
        }

      }

      }
    }
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