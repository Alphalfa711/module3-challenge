// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// // Define generatePassword function
function generatePassword() {
  
  var newPasswordArray = [];
  var generatedPassword = [];

  // // Prompt user for valid password lenght, re-prompt is user does not provide valid number
  while (true) {    
    var passwordLength = prompt("Q 1/5 - What should be the length of the password? (Valid range: 8-128 characters)");    
    passwordLength = Number(passwordLength);    
    if (isNaN(passwordLength)) {
      continue;
    } else {
      if (passwordLength < 8 || passwordLength > 128)  {
        continue;
      } else {
        break;
      }    
    }  
  }

  // Ask user whether or not to use lowercase letters
  var lowerCase = "";
  while (true) {    
    lowerCase = prompt("Q 2/5 - Should password include lowercase letters? (Valid response: Y/N");    
    
    if (lowerCase === 'Y' || lowerCase === 'y') {
      for (var i = 97; i < 123; i++)
        newPasswordArray.push(i);
      break;
    } 
    else if (lowerCase === 'N' || lowerCase === 'n' ) {
      break;
    }
    else {      
      continue;
      }    
    }  

  // Ask user whether or not to use uppercase letters
  var upperCase = "";
  while (true) {    
    upperCase = prompt("Q 3/5 - Should password include uppercase letters? (Valid response: Y/N");    
    
    if (upperCase === 'Y' || upperCase === 'y') {
      for (var i = 65; i < 91; i++)
        newPasswordArray.push(i);
      break;
    } 
    else if (upperCase === 'N' || upperCase === 'n' ) {
      break;
    }
    else {      
      continue;
      }    
    }  

   // Ask user whether or not to use uppercase letters
  var numbers = "";
  while (true) {    
    numbers = prompt("Q 4/5 - Should password include numbers? (Valid response: Y/N");    
    
    if (numbers === 'Y' || numbers === 'y') {
      for (var i = 48; i < 58; i++)
        newPasswordArray.push(i);
      break;
    } 
    else if (numbers === 'N' || numbers === 'n' ) {
      break;
    }
    else {      
      continue;
      }    
    }  

   // Ask user whether or not to use special characters
  var specialChar = "";
  while (true) {    
    specialChar = prompt("Q 5/5 - Should password include special characters? (Valid response: Y/N");    
    
    if (specialChar === 'Y' || specialChar === 'y') {
      for (var i = 33; i < 48; i++) {
        newPasswordArray.push(i);
      }
      for (var i = 58; i < 65; i++) {
        newPasswordArray.push(i);
      }
      for (var i = 91; i < 98; i++) {
        newPasswordArray.push(i);
      }
      for (var i = 123; i < 127; i++) {
        newPasswordArray.push(i);
      }
      break;
    } 
    else if (specialChar === 'N' || specialChar === 'n' ) {
      break;
    }
    else {      
      continue;
      }    
    }  

  
  var randomChar;
  for (var i = 0; i < passwordLength; i++) {
    randomChar = newPasswordArray[Math.floor(Math.random() * newPasswordArray.length)];

    generatedPassword.push(String.fromCharCode(randomChar));
  }


  // passwordLength; lowerCase
    console.log(newPasswordArray);

  return generatedPassword.join("");
}
