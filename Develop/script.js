// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase;
var upperCase;
var numerics;
var specialCharacters;
var maxPass = getMaxPassLength();

generatePassword();

function randomNum(min,max) {
  return Math.floor(Math.random() * (max-min + 1) + min);
}

function getMaxPassLength() {
  var maxPass= prompt("8 characters is the minimum password length. \nWhat is the largest you'd like yours to be? \nChoose a number between 8 - 128!");
  if (maxPass >= 8 && maxPass <= 128)
  {
    return maxPass;
  }
  else {
    //if player enters too large or too small of a number, a random number between 8 and a random number between 8 - 128 will be generated.
    maxPass = randomNum(8, randomNum(8,128));
    alert("Invalid number. Password between 8 and 128 characters will be generated!");
    return maxPass;
  }
}

//checks if the criteria on index.html are checked or not.
function pCriteria() {
  if (document.getElementById("lowerCase").checked == true) {
    lowerCase = 1;
  }
  else {
    lowerCase = 0;
  }

  if (document.getElementById("upperCase").checked == true) {
    upperCase = 1;
  }
  else {
    upperCase = 0;
  }

  if (document.getElementById("numerics").checked == true) {
    numerics = 1;
  }
  else {
    numerics = 0;
  }

  if (document.getElementById("specialCharacters").checked == true) {
    specialCharacters = 1;
  }
  else {
    specialCharacters = 0;
  }

  var passCriteria = { lowerCase, upperCase, numerics, specialCharacters };

  enoughCriteria(passCriteria);
  return passCriteria;

}

//gets the values of each of the criteria from pCriteria() and adds them up to see if at least 2 are checked.
function enoughCriteria() {
  if (lowerCase + upperCase + numerics + specialCharacters >= 2) {
    return true;
  }
  else {
    return false;
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

function generatePassword() {
  var password = [];
  var randomPassword = [];
  if (enoughCriteria(pCriteria()) === true) {
    if(lowerCase == 1) {
         password = password.concat("a", "b", "c", "d", "e", "f", "g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");

  }
  if(upperCase == 1) {
    password = password.concat("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");

  }
  if(numerics == 1) {
   password = password.concat("0","1","2","3","4","5","6","7","8","9");
  }
  if(specialCharacters == 1) {
    password = password.concat("#","@","!","%","&","(","/",")");
  }

  var randomPassLength = randomNum(8, maxPass);
  
  for(var i = 0; i < randomPassLength; i++) {
      randomPassword[i] = password[randomNum(0, password.length - 1)];
    }

    return randomPassword.join("");
  }
  else {
    alert("You must select at least 2 criteria to generate a random password.")
    return null;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
