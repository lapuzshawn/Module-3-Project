// Variables needed for Password Generator Challenge 
var charLength = 128;
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArray = ["1","2","3","4","5","6","7","8","9","0"];
var specialArray = ["!","@","#","$","%","^","&","*","(",")",".","?"];
// "Password characters" will be added to choiceArray via prompt
var choiceArray = [ ];

// Assignment code here // Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Generate PW based on PW prompts function 
function generatePassword(){

}

function getPrompts(){
  // Reset choiceArray
  var choiceArray = [ ];

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
};










// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the LENGTH of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character TYPES to include in the password
// THEN I confirm whether or not to include #lowercase, #uppercase, 
// #numeric, and/or #special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page