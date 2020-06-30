// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symbols = "!@#$%^&*()_+:<>}{|";
var confirmLength;
var uppercaseCheck;
var lowercaseCheck;
var numberCheck;

// Write password to the #password input

//Function for the user to determine the length of the generated password.
function length() {
  confirmLength = (prompt("How many characters would you like your password to contain?"));
    

   if (confirmLength<8 || confirmLength>128 || isNaN(confirmLength) ) {
     alert("Password length must be between 8 and 128 characters");
      length();
   } else {
      alert("The next three screens will ask about your password requirements and length of"+" "+confirmLength);
    }
    return confirmLength;
}
//Function for the user to add a uppercase character in the generated password.
function uppercaseChar(){
  uppercaseCheck = prompt("Do you want to include uppercase letters in your password? \n(Yes or No)");
    uppercaseCheck = uppercaseCheck.toLowerCase(); 
    
    
    if (uppercaseCheck === "yes" || uppercaseCheck ==="y"){
      uppercaseCheck = true;
      return uppercaseCheck;

    }else if (uppercaseCheck === "no" || uppercaseCheck ==="n"){
      uppercaseCheck = false;
      return uppercaseCheck;
    
    }else {
      alert("Please answer 'Yes' or 'No'");
        uppercaseChar();
    }
    return uppercaseCheck;
}

//Function for the user to add a numerical character in the generated password.
function numberChar(){
  numberCheck = prompt("Do you want to include numbers in your password? \n(Yes or No)");
    numberCheck = numberCheck.toLowerCase();

    if (numberCheck === "yes" || numberCheck ==="y"){
      numberCheck = true;
      return numberCheck;

    }else if (numberCheck === "no" || numberCheck ==="n"){
      numberCheck = false;
      return numberCheck;
    
    }else {
      alert("Please answer Yes or No");
        numberChar();
    }
    return numberCheck;
}

//Function for the user to add a special character in the generated password.
function specialChar(){
  specialCheck = prompt("Do you want to include special characters in your password? \n(Yes or No)");
    specialCheck = specialCheck.toLowerCase();

if (specialCheck === "yes" || specialCheck ==="y"){
      specialCheck = true;
      return specialCheck;

    }else if (specialCheck === "no" || specialCheck ==="n"){
      specialCheck = false;
      return specialCheck;
    
    }else {
      alert("Please answer Yes or No");
        specialChar();
    }
    return specialCheck;
}

//function generate the password for the user to interact with. Includes console logss for inspect.
function generatePassword() {
  length();
    console.log(confirmLength);
  uppercaseChar();
    console.log(uppercaseCheck);
  numberChar();
    console.log(numberCheck);
  specialChar();
    console.log(specialCheck);

  //Variable for conversion to generate password. 
  var characters = lowercase;
  var password = "";

  if (uppercaseCheck && numberCheck && specialCheck){
    characters += uppercase + numbers + symbols
  
  }else if (uppercaseCheck && numberCheck){
    characters += uppercase + numbers;
  
  }else if (numberCheck && specialCheck){
    characters += numbers + symbols;
  
  }else if (uppercaseCheck && specialCheck){
    characters += uppercase + symbols;
  
  }else if (uppercaseCheck){
    characters += uppercase;
  
  }else if(numberCheck){
    characters += numbers;
  
  }else if (specialCheck){
    characters += symbols;
  
  }else{
    characters === lowercase;
  }
  
  //Loop for randimizing password. 
    for(var i = 0; i < confirmLength; i++){
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;

}

//Function to add password to the generate password section on the user interface.
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);