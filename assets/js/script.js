

// DECLARING PASSWORD GENERATION FUNCTION
// When you click the generate password button, this function is called
var generatePassword = function () {
  var count = Number(prompt("Please enter the amount of characters you would like in your password."));

  // Checks if chosen character count is within the range, and alerts and restarts the process if not
  if (count <= 8 && count >= 128) {
    alert("Please provide a number between 8 and 128.");
    }
  else {
  // CONFIRM PROMPTS
  var includeUppercase = confirm("Would you like to include uppercase letters?");
  var includeLowercase = confirm("Would you like to include lowercase letters?");
  var includeSpecialCharacters = confirm("Would you like to include special characters?");
  var includeNumbers = confirm("Would you like to include numbers?");

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
  console.log("Length of total characters: " + totalCharacters);
  console.log('Length of total characters' + totalCharacters.length)

  // Empty string to collect the randomly chosen string elements of our character types
  var genPassword = "";

  // RANDOMIZATIONS
  // This loop adds random string positions from totalCharacters to the genPassword string, and is limited by the chosen count of characters from confirm prompt
  for (var i = 0; i < count; i++) {
    // Generates a random number using the length of the totalCharacters
    var random = Math.floor(Math.random() * totalCharacters.length);
    // Adds totalCharacters position value to the genPassWord string
    genPassword += totalCharacters[random];
  };

  // Logs generated password
  console.log('Generated password: ' + genPassword);

  // CHARACTER PRESENCE LOGIC
  
  // Function to check character types within generated password, and return to an array, and if 'true is not present, then it will restart the function
  var isCharacterPresent = function (type) {
    var hasCharacterType = [];
    for (var i = 0; i < type.length; i++) {
      hasCharacterType.push(genPassword.includes(type[i])); 
    };
    if (hasCharacterType.includes(true)) {
      console.log(type, 'YAY!');
    } else {
      console.log(type, 'No characters present!');
      generatePassword();
    }
    console.log(hasCharacterType);  
  };

  // RUNNING PRESENCE LOGIC
  isCharacterPresent(lowercaseLetters);
  isCharacterPresent(uppercaseLetters);
  isCharacterPresent(specialCharacters);
  isCharacterPresent(numbers);

  document.querySelector("#password").textContent = `${genPassword}`;
  }
};

// CLICK FUNCTIONALITY FOR BUTTON
// Add event listener to generate button
var generateBtn = document.getElementById("generate");
// Click function
generateBtn.addEventListener("click", generatePassword);
