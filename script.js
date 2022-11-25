// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {

  var lower = ('abcdefghijklmnopqrstuvwxy');
  var upper = ('ABCDEFGHIJKLMNOPQRSTUVWXY');
  var numbers = ('1234567890');
  var special = (`~!@#$%^&*()-_=+[{]}|'";:/?.>,<*-+`);

  var num = window.prompt("How many characters would you like your password to be?");

  if(num >= 8 && num <=128) {
    var passwordString = ("");
    var password = ("");

    if(window.confirm("Would you like to include lowercase letters?")) {
      passwordString = passwordString + lower;
    };
    if(window.confirm("Would you like to include UPPERCASE letters?")) {
      passwordString = passwordString + upper;
    };
    if(window.confirm("Would you like to include special letters?")) {
      passwordString = passwordString + special;
    };
    if(window.confirm("Would you like to include numbers?")) {
      passwordString = passwordString + numbers;
    };
    if(passwordString == ("")) {
      window.alert("You must select at least one character type.\nPlease try again.")
      generatePassword();
    };
    for (let i=0 ; i < num ; i++) {
      password = password + passwordString[(Math.floor(Math.random()*passwordString.length))];
    };
    return password;
  } else {
    window.alert("Password must be between 8 and 128 characters");
    generatePassword();
  };
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
