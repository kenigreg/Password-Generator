// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let passwordLength, lowerCase, upperCase, numberCharacter, specialXter;

// Function to prompt user for password options
function getPasswordOptions() {
  // This section gets the User's password length
  do {
    passwordLength = prompt("Please provide the password length you want in numbers, between 8 and 128");
  }
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) || passwordLength == null);

  alert("You need to Click OK for at least one of the following options for 'Lowercase, Uppercase, Numeric or Special Characters' if you want them in your password");

  do {
    // This section confirms if the User wants a Lowercase character in password
    lowerCase = confirm("Confirm if you want a lowercase character in your passpord!\nClick OK or Cancel.");

    // This section confirms if the User wants a Uppercase character in password
    upperCase = confirm("Confirm if you want an uppercase character in your passpord!\nClick OK or Cancel.");

    // This section confirms if the User wants a Numeric character in password
    numberCharacter = confirm("Confirm if you want a Numeric character in your passpord!\nClick OK or Cancel.");
  
    // This section confirms if the User wants a Special character in password
    specialXter = confirm("Confirm if you want a Special character in your passpord!\nClick OK or Cancel.");
  }
  while (lowerCase === false && upperCase === false && numberCharacter === false && specialXter === false);

}
getPasswordOptions();


let randomSpecialCharacter, randomNumericCharacter, randomLowerCase, randomUpperCase;
let passwordArray = [];

// Function for getting a random element from an array
function getRandom(arr) {
  do {
    if (specialXter && passwordArray.length < passwordLength) {
      randomSpecialCharacter = Math.floor(Math.random() * (specialCharacters.length));
      if (randomSpecialCharacter) {
        passwordArray.push(specialCharacters[randomSpecialCharacter]);
      }
      
    }
    
    if (numberCharacter && passwordArray.length < passwordLength) {
      randomNumericCharacter = Math.floor(Math.random() * (numericCharacters.length));
      if (randomNumericCharacter) {
        passwordArray.push(numericCharacters[randomNumericCharacter]);
      }
    }
  
    if (lowerCase && passwordArray.length < passwordLength) {
      randomLowerCase = Math.floor(Math.random() * (lowerCasedCharacters.length));
      if (randomLowerCase) {
        passwordArray.push(lowerCasedCharacters[randomLowerCase]);
      }
      
    }
  
    if (upperCase && passwordArray.length < passwordLength) {
      randomUpperCase = Math.floor(Math.random() * (upperCasedCharacters.length));
      if (randomUpperCase) {
        passwordArray.push(upperCasedCharacters[randomUpperCase]);
      }
      
    }
  }
  while (passwordArray.length < passwordLength);

}
getRandom();

// Code to scramble the generated password
let randomIndex, tempIndex;
for (let i = passwordArray.length - 1; i > 0; i--) {
    randomIndex = Math.floor(Math.random() * (i + 1));
    tempIndex = passwordArray[i];
    passwordArray[i] = passwordArray[randomIndex];
    passwordArray[randomIndex] = tempIndex;
}



// Function to generate password with user input
function generatePassword() {
  return passwordArray.join('');
}




 

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);