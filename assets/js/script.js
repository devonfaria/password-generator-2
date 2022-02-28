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
  console.log(count);
  var includeUppercase = confirm("Would you like to include uppercase letters?");
  var includeLowercase = confirm("Would you like to include lowercase letters?");
  var includeSpecialCharacters = confirm("Would you like to include special characters?");
  var includeNumbers = confirm("Would you like to include numbers?");

  // Checking the booleans of the confirm prompts
  console.log(includeUppercase, includeLowercase, includeSpecialCharacters, includeNumbers);

  // List of possible charcter types and the options
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Must add missing special characters (brackets and quotes)
  var specialCharacters = "!#$%&'()*+,-./:;<=>?@[^_`{|}~";
  var numbers = "1234567890";
  var totalCharacters = "";

  // Logic to add chosen characters types to totalCharacters string
  if (includeLowercase) {
    totalCharacters += lowercaseLetters;
  } if (includeUppercase) {
    totalCharacters += uppercaseLetters;
  } if (includeSpecialCharacters) {
    totalCharacters += specialCharacters;
  } if (includeNumbers) {
    totalCharacters += numbers;
  }
  console.log(totalCharacters);
  // Empty string to collect the randomly chosen string elements of our character types
  var genPassword = "";

  // This loop adds random string positions to the genPassword string collecting our array
  for (var i = 0; i < count; i++) {
    var random = Math.floor(Math.random() * letters.length);
    genPassword += letters[random];
  }

  console.log(genPassword);

  return genPassword;
}