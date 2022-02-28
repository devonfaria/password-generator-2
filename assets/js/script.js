// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function writePassword () {
  console.log('Button is being clicked!');
}
;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword() {
  var count = Number(prompt("Please enter the amount of characters you would like in your password."));
  
  var letters = "abcdefghijklmnopqrstuvwxyz";
  // Add special characters
  var specialCharacters = "";
  var genPassword = "";

  for (var i = 0; i < count; i++) {
    var random = Math.floor(Math.random() * letters.length);
    genPassword += letters[random];
  }

  console.log(genPassword);

  return genPassword;
}