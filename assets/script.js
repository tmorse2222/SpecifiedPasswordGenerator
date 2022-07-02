
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
 if (7 < Number(passwordLength) && Number(passwordLength) < 129) {
  var passwordCase = window.confirm(`Your password will contain : ${passwordLength} characters\n
  Please select "ok" if you would like to include both upper and lower case characters in your password. If you would like to use lower case only, please select cancel.`)
  if (passwordCase == true) {
    var passwordNumber = window.confirm(`You have selected both Upper and Lower case characters\n
    Your password will contain : ${passwordLength} characters\n
    Please select "ok" if you would like to include numbers in your password, please select cancel if you would like no numbers`)
    if (passwordNumber == true) {
      var passwordSpecial = window.confirm(`You have selected to include numbers, Upper case, and Lower case characters in your password\n
      Your password will contain : ${passwordLength} characters\n
      Please select "ok" if you would like to include special characters, such as !, @, #, if not please select cancel`)
      if (passwordSpecial == true) {
        var passwordConfirm = window.confirm(`You have selected a password that will contain special characters, numbers, upper, and lower case characters\n
        Your password will contain : ${passwordLength} characters\n
        To confirm, please select "ok", to start over, please select "cancel"`)

        if (passwordConfirm == true) {

          var characters = `${lower}${upper}${numbers}${symbols}`
          var result = ``
          
          for ( var i = 0; i < passwordLength; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * 75));
          }

          return result;

        } else {
         window.confirm(`Password generator cancelled, Select "Generate Password" button to start over`)
        }

      } else {
        var passwordConfirm = window.confirm(`You have selected a password that will not contain special characters, but will contain numbers, upper, and lower case characters\n
        Your password will contain : ${passwordLength} characters\n
        To confirm, please select "ok", to start over, please select "cancel"`)

        if (passwordConfirm == true) {
          var characters = `${lower}${upper}${numbers}`
          var result = ``
          for ( var i = 0; i < passwordLength; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * 63));
          }
  
          return result;
        } else {
          window.confirm(`Password generator cancelled, Select "Generate Password" button to start over`)
        }
      }

      } else {
        var passwordSpecial = window.confirm(`You have selected a password that will not contain numbers, but will contain upper, and lower case characters\n
        Your password will contain : ${passwordLength} characters\n
      Please select "ok" if you would like to include special characters, such as !, @, #, if not please select cancel`)

      if (passwordSpecial == true) {
        var passwordConfirm = window.confirm(`You have selected a password that will not contain numbers, but will contain special characters, upper, and lower case characters\n
        Your password will contain : ${passwordLength} characters\n
        To confirm, please select "ok", to start over, please select "cancel"`)

        if (passwordConfirm == true) {

          var characters = `${lower}${upper}${symbols}`
          var result = ``
          
          for ( var i = 0; i < passwordLength; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * 65));
          }

          return result;

        } else {
         window.confirm(`Password generator cancelled, Select "Generate Password" button to start over`)
        }

      } else {
        var passwordConfirm = window.confirm(`You have selected a password that will not contain special characters or numbers, but will contain upper and lower case characters\n
        Your password will contain : ${passwordLength} characters\n
        To confirm, please select "ok", to start over, please select "cancel"`)

        if (passwordConfirm == true) {
          var characters = `${lower}${upper}`
          var result = ``
          for ( var i = 0; i < passwordLength; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * 53));
          }
  
          return result;
        } else {
          window.confirm(`Password generator cancelled, Select "Generate Password" button to start over`)
        }
      }

      }

    } else {
      var passwordNumber = window.confirm(`You have selected only Lower case characters\n
      Your password will contain : ${passwordLength} characters\n
      Please select "ok" if you would like to include numbers in your password, please select cancel if you would like no numbers`)

      if (passwordNumber == true) {
        var passwordSpecial = window.confirm(`You have selected to include numbers and Lower case characters in your password\n
        Your password will contain : ${passwordLength} characters\n
        Please select "ok" if you would like to include special characters, such as !, @, #, if not please select cancel`)

        if (passwordSpecial == true) {
          var passwordConfirm = window.confirm(`You have selected a password that will contain special characters, numbers, and lower case characters\n
          Your password will contain : ${passwordLength} characters\n
          To confirm, please select "ok", to start over, please select "cancel"`)
  
          if (passwordConfirm == true) {
  
            var characters = `${lower}${numbers}${symbols}`
            var result = ``
            
            for ( var i = 0; i < passwordLength; i++ ) {
              result += characters.charAt(Math.floor(Math.random() * 49));
            }
  
            return result;
  
          } else {
           window.confirm(`Password generator cancelled, Select "Generate Password" button to start over`)
          }
  
        } else {
          var passwordConfirm = window.confirm(`You have selected a password that will not contain special characters, but will contain numbers, and lower case characters\n
          Your password will contain : ${passwordLength} characters\n
          To confirm, please select "ok", to start over, please select "cancel"`)
  
          if (passwordConfirm == true) {
            var characters = `${lower}${numbers}`
            var result = ``
            for ( var i = 0; i < passwordLength; i++ ) {
              result += characters.charAt(Math.floor(Math.random() * 37));
            }
    
            return result;

          } else {
            window.confirm(`Password generator cancelled, Select "Generate Password" button to start over`)
          }
        }
  
        } else {
          var passwordSpecial = window.confirm(`You have selected a password of only lower case characters\n
          Your password will contain : ${passwordLength} characters\n
        Please select "ok" if you would like to include special characters, such as !, @, #, if not please select cancel`)
  
        if (passwordSpecial == true) {
          var passwordConfirm = window.confirm(`You have selected a password that will contain special and lower case characters\n
          Your password will contain : ${passwordLength} characters\n
          To confirm, please select "ok", to start over, please select "cancel"`)
  
          if (passwordConfirm == true) {
  
            var characters = `${lower}${symbols}`
            var result = ``
            
            for ( var i = 0; i < passwordLength; i++ ) {
              result += characters.charAt(Math.floor(Math.random() * 39));
            }
  
            return result;
  
          } else {
           window.confirm(`Password generator cancelled, Select "Generate Password" button to start over`)
          }
  
        } else {
          var passwordConfirm = window.confirm(`You have selected a password that will only contain lower case characters\n
          Your password will contain : ${passwordLength} characters\n
          To confirm, please select "ok", to start over, please select "cancel"`)
  
          if (passwordConfirm == true) {
            var characters = `${lower}`
            var result = ``
            for ( var i = 0; i < passwordLength; i++ ) {
              result += characters.charAt(Math.floor(Math.random() * 28));
            }
    
            return result;

          } else {
            window.confirm(`Password generator cancelled, Select "Generate Password" button to start over`)
          }
        }
  
        }
  
    }
  } else {
    window.prompt(`That integer is not between the specified values, please select the "Generate Password" button and enter a corrisponding value between 8 and 128`)
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