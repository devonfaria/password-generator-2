// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var writePassword = function () {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// CLICK FUNCTIONALITY FOR BUTTON
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

// When you click the generate password button, this function is called
function generatePassword() {
  var count = Number(prompt("Please enter the amount of characters you would like in your password."));
  if (count >= 8 && count <= 128) {
  console.log(count);
  var includeUppercase = confirm("Would you like to include uppercase letters?");
  var includeLowercase = confirm("Would you like to include lowercase letters?");
  var includeSpecialCharacters = confirm("Would you like to include special characters?");
  var includeNumbers = confirm("Would you like to include numbers?");

  // Checking the booleans of the confirm prompts
  console.log(includeUppercase, includeLowercase, includeSpecialCharacters, includeNumbers);


  // GENERATING TOTAL POSSIBLE CHARACTERS
  // List of possible character types listed
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

  // Logs total characters available to the randomization
  console.log(totalCharacters);

  // Empty string to collect the randomly chosen string elements of our character types
  var genPassword = "";


  // RANDOMIZATIONS
  // This loop adds random string positions from totalCharacters to the genPassword string, and is limited by the chosen count of characters from confirm prompt
  for (var i = 0; i < count; i++) {
    // Generates a random number using the length of the totalCharacters
    var random = Math.floor(Math.random() * totalCharacters.length);
    // Adds totalCharacters position value to the genPassWord string
    genPassword += totalCharacters[random];
  }
  // Logs generated password
  console.log(genPassword);

  return genPassword;
} else {
  alert("Incorrect amount of characters. Please choose between 8 and 128 characters.");
  generatePassword();
}};