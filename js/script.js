var characterLength = 8;
var randomNum = [];

var numbers = [1,2,3,4,5,6,7,8,9,0];
var symbols = ["!", "@", "#", "$", "%", "&", "*", "=", "+"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// Assignment Code //added variables
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function showPrompts() {
randomNum = [];

  characterLength = parseInt(prompt("How many characters would you like in your PASSWORD?"));//used NaN to make sure the user entered a number

  if (isNaN(characterLength) || characterLength >= 128 || characterLength <= 8) {
    alert("Please enter a number between 8 and 128 CHARACTERS");
    return false;
  }

  if (confirm("Would you like to include any numbers in your PASSWORD?")) {
    randomNum = randomNum.concat(numbers);
}
  if (confirm("Would you like to include any symbols in your PASSWORD?")) {
    randomNum = randomNum.concat(symbols);
}
  if (confirm("Would you like to include any lowercase letters in your PASSWORD?")) {
    randomNum = randomNum.concat(lowerCase);
}
  if (confirm("Would you like to include any uppercase letters in your PASSWORD?")) {
    randomNum = randomNum.concat(upperCase);
}
return true;
}


function writePassword() {
  var correctPrompts = showPrompts();
  var passwordText = document.querySelector("#password");

if(correctPrompts) {
  var newPassword = generatePassword();
  passwordText.value = newPassword;
}}

function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var specialNum = Math.floor(Math.random() * randomNum.length);
    password = password + randomNum[specialNum];
  }
  return password;
  }