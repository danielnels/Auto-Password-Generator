
// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Creation of Variable Array's 

const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbol = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", " < ", "=", " > ", " ? ", "@", "[", "^", "`", "{", "|", "}", "~"];

var passwordLength = "";
var affrimLower;
var affirmUpper;
var affirmNumber;
var affirmSymbol;

// Generate prompts for the password criteria
function generatePassword() {
  var passwordLength = prompt("How long do you want your password to be (between 8-128 characters)?");

  if(passwordLength < 8 || passwordLength > 128) {
      alert("Password must be between 8-128 characaters.");
      var passwordLength = prompt("How long do you want your password to be (between 8-128 characters)?");
      } 

    var affirmLower = confirm("Do you want to include lowercase letters?");
    var affirmUpper = confirm("Do you want to include uppercase letters?");
    var affirmNumber = confirm("Do you want to include numbers?");
    var affirmSymbol = confirm("Do you want to include symbols?");

      if (!affirmLower && !affirmUpper && !affirmNumber && !affirmSymbol) {
        alert("You must Select at least one option");
    
    } 

// determines type of password criteria depending on the user's Selection
      var userChoice = []
      
    if (affirmSymbol) {
      userChoice = userChoice.concat(symbol)
    }

    if (affirmNumber) {
      userChoice = userChoice.concat(number)
    }
      
    if (affirmLower) {
      userChoice = userChoice.concat(lowerCase)
    }

    if (affirmUpper) {
      userChoice = userChoice.concat(upperCase)
    }

      console.log(userChoice)

      var newPassword = ""
   
// uses the information selected to create and to dispaly a created password
      for (var i = 0; i < passwordLength; i++) {
        newPassword = newPassword + userChoice[Math.floor(Math.random() * userChoice.length)];
        console.log(newPassword)
      }
      return newPassword;
}

// writes the created password to the #password id and displays it on the browser
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}