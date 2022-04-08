
const uppercaseLettersArray = characterLookUp(65, 90); // From ["A", "B", "C", etc...]
const lowercaseLettersArray = characterLookUp(97, 122); // From a - z
const numbersArray = characterLookUp(48, 57); //From 0 - 9
const symbolsArray = characterLookUp(33, 47) // Special symbols
                    .concat(characterLookUp(58, 64))
                    .concat(characterLookUp(91, 96))
                    .concat(characterLookUp(123, 126)); //Special characters'

// This function will look up the code number from the Browser Character Set, retrieve and push it into a arrayOfChar
function characterLookUp(start, end){ 
    let characterArray = [];
    for(let i = start; i <= end; i++){
        characterArray.push(String.fromCharCode(i));
    }
    return characterArray;
}


// This function will prompt the user if they want numbers, symbols, lowercase & uppercase letters
function createCharacterPool(){
    let generalArray = []
    if (confirm("Would you like to include lowercase letters?")){
        // These will only run if user confirms 
        generalArray = generalArray.concat(lowercaseLettersArray);
    }
    if (confirm("Would you like to include uppercase letters?")){
        generalArray = generalArray.concat(uppercaseLettersArray);
    }
    if (confirm("Would you like to include numbers?")){
        generalArray = generalArray.concat(numbersArray);
    }
    if (confirm("Would you like to include symbols?")){
        generalArray = generalArray.concat(symbolsArray);
    }
    if(generalArray === 0){
        alert("Please pick one type of data from the list")
        return createCharacterPool();
    }
    // This will return the generalArray populated with what users want and don't want.
    return generalArray
}

// This function expects a number to return from arrayLength
function randomIndexGenerator(arrayLength){
    // Expect a number to return
    return Math.floor(Math.random() * arrayLength)
}
 
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
 
 