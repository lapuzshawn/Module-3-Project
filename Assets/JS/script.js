// Variables needed for Password Generator Challenge 
var charLength = 128;
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArray = ["1","2","3","4","5","6","7","8","9","0"];
var specialArray = ["!","@","#","$","%","^","&","*","(",")",".","?"];
// "Password characters" will be added to choiceArray via prompt
var choiceArray = [ ];
// var newPassword = "null"

// Assignment code here // Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

// Write password to the #password input
function writePassword() {
  var validValues = getPrompts();
  var passwordText = document.querySelector("#password");

  if(validValues) {
    var newPassword = generatePassword();
    //Stores newPassword value to be displayed in HTML via JS 
    passwordText.value = newPassword;
  } else {
    passwordText.value = "Invalid Values";
  }


};

// Generate PW based on PW prompts function 
function generatePassword(){
  var password = "";
  for(var i = 0; i < charLength; i++) {
    var randomArrayIndex = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomArrayIndex];
  }
  return password;
}

function getPrompts(){
  // Reset choiceArray
  choiceArray = [ ];

  charLength = parseInt(prompt("How long do you want your password to be? (Limited to 8 to 128 character only)"));

  if( charLength < 8 || charLength > 128) {
    alert("Password lenght can only be 8 to 128 long. Try again!")
  }

  if(confirm("Would you like lowercase characters in your password?")){
    choiceArray = choiceArray.concat(lowercaseArray); 
  }
  
  if(confirm("Would you like uppercase characters in your password?")){
    choiceArray = choiceArray.concat(uppercaseArray); 
  }

  if(confirm("Would you like numbers  in your password?")){
    choiceArray = choiceArray.concat(numberArray); 
  }

  if(confirm("Would you like special characters in your password?")){
    choiceArray = choiceArray.concat(specialArray); 
  }
  return true;
}

//FIX THIS 
//FIGURE OUT HOW TO GET 'GENERATE PASSWORD' BUTTON TO WORK AGAIN W/O REFRESHING 

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page