// Assignment Code
var generateBtn = document.querySelector("#generate");


function getLength() {
  var num = window.prompt("Please enter length between 8 and 128");

  if (num !== null && (isNaN(num) || num < 8 || num > 128)) {
    getLength();
  } 
  return parseInt(num)
}

const types = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@|#$%^`&*()_+~\}{[]:;?><,./-="
}

function lowerCheck(chars) {
  lower = window.confirm("Lower Case");
  if (lower) {
    chars += types.lowerCase
    return chars
  } else {
    return chars
  }
}

function upperCheck(chars) {
  upper = window.confirm("Upper Case");
  if (upper) {
    chars += types.upperCase
    return chars
  } else {
    return chars
  }
}

function numberCheck(chars) {
  number = window.confirm("Numbers");
  if (number) {
    chars += types.numbers
    return chars
  } else {
    return chars
  }
}

function symbolCheck(chars) {
  symbol = window.confirm("Symbols");
  if (symbol) {
    chars += types.symbols
    return chars
  } else {
    return chars
  }
}

function generatePassword() {
  var char = "";
  
  len = getLength();

  char = lowerCheck(char);
  char = upperCheck(char);
  char = numberCheck(char);
  char = symbolCheck(char);

  if (char == "") {
    generatePassword();
  }
  var password = "";
  
  for (var i = 0; i < len; i++) {
    var ranChar = Math.floor(Math.random() * char.length);

    password += char.charAt(ranChar);
  }
  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
