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

  // Initiate forever loop
  while (true) {
    // Declare variables
    var newPasswordArray = [];
    var generatedPassword = [];

    // Prompt user for valid password lenght, re-prompt is user does not provide valid number between 8-128
    while (true) {    
      var passwordLength = prompt("Q 1/5 - What should be the length of the password? (Valid range: 8-128 characters)");    
      // Test to see if user entered number
      passwordLength = parseInt(passwordLength);    
      // If user did not provide number display prompt again
      if (isNaN(passwordLength)) {
        continue;
      } 
      else {
        // Chect to see if entered number is within valid range
        if (passwordLength < 8 || passwordLength > 128)  {
          // If number not within valid range prompt user again
          continue;
        } 
        else {
          // If number is within range break our of loop and contine executing code below
          break;
        }    
      }  
    }

    // const alpha = Array.from(Array(26)).map((e, i) => i + 65).map((x) => String.fromCharCode(x));
    
    // Ask user whether or not to use lowercase letters
    var lowerCase = confirm("Q 2/5 - Should password include lowercase letters?")
    if (lowerCase) {
      // If user confirms prompt, push ASCII representation of lowercase letters to newPasswordArray
      // ASCII range for lowercase letters 97-122      
      for (var i = 97; i < 123; i++) {
        // newPasswordArray.push(i);
        newPasswordArray.push(String.fromCharCode(i));
      // newPasswordArray.push(String.fromCharCode(i + 97));      
      }
    } 
    
    // Ask user whether or not to use uppercase letters
    var upperCase = confirm("Q 3/5 - Should password include uppercase letters?");    
    if (upperCase) {
      // If user confirms prompt push ASCII representation of uppercase letters to newPasswordArray
      for (var i = 65; i < 91; i++)
        // newPasswordArray.push(i);
        newPasswordArray.push(String.fromCharCode(i));
      } 
    
    // Ask user whether or not to use uppercase letters
    var numbers = confirm("Q 4/5 - Should password include numbers?");    
    if (numbers) {
      // If user confirms prompt push ASCII representation of numbers to newPasswordArray
      for (var i = 48; i < 58; i++)
        newPasswordArray.push(i);
    } 

    // Ask user whether or not to use special characters
    var specialChar = confirm("Q 5/5 - Should password include special characters?");    
    if (specialChar) {
      // If user confirms prompt push ASCII representation of special characters to newPasswordArray
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
    }

    // If user pressed OK to at least one prompt execute below code
    if (newPasswordArray.length > 0) {
      var randomArrayIndex;
      for (var i = 0; i < passwordLength; i++) {
        // Generate random array index
        randomArrayIndex = newPasswordArray[Math.floor(Math.random() * newPasswordArray.length)];
        // Convert number to char from ASCII table and push to generatedPassword array
        generatedPassword.push(String.fromCharCode(randomArrayIndex));
      }
      // break out of while true loop
      break;
    } 
    // If user did not accept any prompt and array is empty 
    else {
      // Alert user that password cannot be generated
      alert("Unable to generate password, at least one prompt needs to be accepted.")
      // Ask user to start the process again
      var restart = confirm("Start the process again ?")
      if (restart) {
        // If confirmed start from the beginning
        continue;
      }      
      else {
        // Return original input box text
        return "Your Secure Password";        
      }      
    }
  }  

  // Return generated password
  return generatedPassword.join("");    
}
