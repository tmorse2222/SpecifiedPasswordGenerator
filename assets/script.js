
// Global Variables

var lower = `abcdefghijklmnopqrstuvwxyz`;
var upper = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
var numbers = `0123456789`;
var symbols = `!@#$%^&*_-+=`;

// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// Function generatePassword

function generatePassword() {
  // Popup for password length w/ conditional statement; assigns local var for password length

 var passwordLength = window.prompt(`Please enter a number 8-128, this will be your password length`);

//  If statement for password length

 if (7 < Number(passwordLength) && Number(passwordLength) < 129) {

  // Popup w/ verification asking for upper cased characters

  var passwordCase = window.confirm(`Your password will contain : ${passwordLength} characters\n
  Please select "ok" if you would like to include both upper and lower case characters in your password. If you would like to use lower case only, please select cancel.`)
 
  // If statement for charachter selection

  if (passwordCase == true) {

    // Popup w/ verification asking for numbers

    var passwordNumber = window.confirm(`You have selected both Upper and Lower case characters\n
    Your password will contain : ${passwordLength} characters\n
    Please select "ok" if you would like to include numbers in your password, please select cancel if you would like no numbers`)

    // If statement for number selection

    if (passwordNumber == true) {

// Popup w/ verification asking for symbols

      var passwordSpecial = window.confirm(`You have selected to include numbers, Upper case, and Lower case characters in your password\n
      Your password will contain : ${passwordLength} characters\n
      Please select "ok" if you would like to include special characters, such as !, @, #, if not please select cancel`)

// If statement for symbol selection

      if (passwordSpecial == true) {

// Popup confirming selections

        var passwordConfirm = window.confirm(`You have selected a password that will contain special characters, numbers, upper, and lower case characters\n
        Your password will contain : ${passwordLength} characters\n
        To confirm, please select "ok", to start over, please select "cancel"`)

// If statement for confirmation selection

        if (passwordConfirm == true) {

          // Function creating password

          var characters = `${lower}${upper}${numbers}${symbols}`
          var result = ``
          
          for ( var i = 0; i < passwordLength; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * 75));
          }

          return result;

// Else statement for confirmation selection

        } else {
         window.confirm(`Password generator cancelled, Select "Generate Password" button to start over`)
        }

// Else statement for symbol selection

      } else {

// Popup for confirmation

        var passwordConfirm = window.confirm(`You have selected a password that will not contain special characters, but will contain numbers, upper, and lower case characters\n
        Your password will contain : ${passwordLength} characters\n
        To confirm, please select "ok", to start over, please select "cancel"`)

// if statement for confirmation selection

        if (passwordConfirm == true) {

// function creating password

          var characters = `${lower}${upper}${numbers}`
          var result = ``
          for ( var i = 0; i < passwordLength; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * 63));
          }
  
          return result;

          // Else statement for confirmation selection

        } else {

// Popup for confirmation selection

          window.confirm(`Password generator cancelled, Select "Generate Password" button to start over`)
        }
      }

// else statement for number selection

      } else {

// Popup w/ verification asking for symbols

        var passwordSpecial = window.confirm(`You have selected a password that will not contain numbers, but will contain upper, and lower case characters\n
        Your password will contain : ${passwordLength} characters\n
      Please select "ok" if you would like to include special characters, such as !, @, #, if not please select cancel`)

// if statement for symbol selection

      if (passwordSpecial == true) {

// Popup for confirmation

        var passwordConfirm = window.confirm(`You have selected a password that will not contain numbers, but will contain special characters, upper, and lower case characters\n
        Your password will contain : ${passwordLength} characters\n
        To confirm, please select "ok", to start over, please select "cancel"`)

// if statement for confirmation selection

        if (passwordConfirm == true) {

// function creating password

          var characters = `${lower}${upper}${symbols}`
          var result = ``
          
          for ( var i = 0; i < passwordLength; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * 65));
          }

          return result;

// else statement for confirmation selection

        } else {
         window.confirm(`Password generator cancelled, Select "Generate Password" button to start over`)
        }

// Else statement for symbol selection

      } else {

// Popup for confirmation

        var passwordConfirm = window.confirm(`You have selected a password that will not contain special characters or numbers, but will contain upper and lower case characters\n
        Your password will contain : ${passwordLength} characters\n
        To confirm, please select "ok", to start over, please select "cancel"`)

// if statement for confirmation selection

        if (passwordConfirm == true) {

// function creating password

          var characters = `${lower}${upper}`
          var result = ``
          for ( var i = 0; i < passwordLength; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * 53));
          }
  
          return result;

// else statement for confirmation

        } else {
          window.confirm(`Password generator cancelled, Select "Generate Password" button to start over`)
        }
      }

      }

// else statement for character selection

    } else {

// Popup w/ verification asking for numbers

      var passwordNumber = window.confirm(`You have selected only Lower case characters\n
      Your password will contain : ${passwordLength} characters\n
      Please select "ok" if you would like to include numbers in your password, please select cancel if you would like no numbers`)

// if statement for number selection

      if (passwordNumber == true) {

// Popup w/ verification asking for symbols

        var passwordSpecial = window.confirm(`You have selected to include numbers and Lower case characters in your password\n
        Your password will contain : ${passwordLength} characters\n
        Please select "ok" if you would like to include special characters, such as !, @, #, if not please select cancel`)

// if statement for symbol selection

        if (passwordSpecial == true) {

// Popup w/ verification asking for confirmation

          var passwordConfirm = window.confirm(`You have selected a password that will contain special characters, numbers, and lower case characters\n
          Your password will contain : ${passwordLength} characters\n
          To confirm, please select "ok", to start over, please select "cancel"`)
  
// if statement for confirmation selection

          if (passwordConfirm == true) {

            // Function creating password
  
            var characters = `${lower}${numbers}${symbols}`
            var result = ``
            
            for ( var i = 0; i < passwordLength; i++ ) {
              result += characters.charAt(Math.floor(Math.random() * 49));
            }
  
            return result;
  
// else statement for confirmation selection

          } else {
           window.confirm(`Password generator cancelled, Select "Generate Password" button to start over`)
          }
  
// Popup w/ verification asking for confirmation

        } else {
          var passwordConfirm = window.confirm(`You have selected a password that will not contain special characters, but will contain numbers, and lower case characters\n
          Your password will contain : ${passwordLength} characters\n
          To confirm, please select "ok", to start over, please select "cancel"`)
  
// if satement for confirmation selection

          if (passwordConfirm == true) {

// function creating password

            var characters = `${lower}${numbers}`
            var result = ``
            for ( var i = 0; i < passwordLength; i++ ) {
              result += characters.charAt(Math.floor(Math.random() * 37));
            }
    
            return result;

// Else statement for confirmation selection

          } else {
            window.confirm(`Password generator cancelled, Select "Generate Password" button to start over`)
          }
        }
  
// else statement for number selection

        } else {

// Popup w/ verification asking for symbols

          var passwordSpecial = window.confirm(`You have selected a password of only lower case characters\n
          Your password will contain : ${passwordLength} characters\n
        Please select "ok" if you would like to include special characters, such as !, @, #, if not please select cancel`)
  
// if statement for symbol selection

        if (passwordSpecial == true) {

// Popup w/ verification asking for confirmation

          var passwordConfirm = window.confirm(`You have selected a password that will contain special and lower case characters\n
          Your password will contain : ${passwordLength} characters\n
          To confirm, please select "ok", to start over, please select "cancel"`)
  
// if statement for confirmation

          if (passwordConfirm == true) {
  
// function creating password

            var characters = `${lower}${symbols}`
            var result = ``
            
            for ( var i = 0; i < passwordLength; i++ ) {
              result += characters.charAt(Math.floor(Math.random() * 39));
            }
  
            return result;
  
// else statement for confirmation selection

          } else {
           window.confirm(`Password generator cancelled, Select "Generate Password" button to start over`)
          }
  
// else statement for symbol selection

        } else {

// Popup /w verification asking for confirmation

          var passwordConfirm = window.confirm(`You have selected a password that will only contain lower case characters\n
          Your password will contain : ${passwordLength} characters\n
          To confirm, please select "ok", to start over, please select "cancel"`)
  
// if statement for confirmation

          if (passwordConfirm == true) {

// function creating password

            var characters = `${lower}`
            var result = ``
            for ( var i = 0; i < passwordLength; i++ ) {
              result += characters.charAt(Math.floor(Math.random() * 28));
            }
    
            return result;

// else statement for confirmation

          } else {
            window.confirm(`Password generator cancelled, Select "Generate Password" button to start over`)
          }
        }
  
        }
  
    }

// Else statement for invalid password length

  } else {
    window.prompt(`That integer is not between the specified values, please select the "Generate Password" button and enter a corresponding value between 8 and 128`)
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