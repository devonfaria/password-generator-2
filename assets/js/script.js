// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// function writePassword () {
//   console.log('Button is being clicked!');
// }
// ;

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword());



function generatePassword() {
  var count = Number(prompt("Please enter the amount of characters you would like in your password."));
  prompt("Would you like to include uppercase letters?");
  prompt("Would you like to include lowercase letters?");
  prompt("Would you like to include special characters?");
  prompt("Would you like to include numbers?");

  // List of possible charcter types and the options
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialCharacters = "!#$%&'()*+,-./:;<=>?@[^_`{|}~";
  var numbers = "1234567890";

  // Empty string to collect the chosen character types
  var genPassword = "";

  for (var i = 0; i < count; i++) {
    var random = Math.floor(Math.random() * letters.length);
    genPassword += letters[random];
  }

  console.log(genPassword);

  return genPassword;
}