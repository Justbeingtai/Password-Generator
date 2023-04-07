// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Define a function to generate a random password
function generatePassword() {
  // Define the criteria for the password
  var length = prompt("Enter the desired password length (between 8 and 128 characters):");

  // Validate the password length
  if (length < 8 || length > 128) {
    alert("Password length must be between 8 and 128 characters. Please try again.");
    return;
  }

  var lowercase = confirm("Include lowercase letters?");
  var uppercase = confirm("Include uppercase letters?");
  var numbers = confirm("Include numbers?");
  var specialChars = confirm("Include special characters?");

  // Validate that at least one criterion is selected
  if (!lowercase && !uppercase && !numbers && !specialChars) {
    alert("Please select at least one password criterion.");
    return;
  }

  // Define the character set for the password based on the selected criteria
  var charset = "";
  if (lowercase) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }
  if (uppercase) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (numbers) {
    charset += "0123456789";
  }
  if (specialChars) {
    charset += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }

  // Generate the password
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
