//
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

const lowerCaseRange = [97, 122] 
const upperCaseRange = [65, 90]

// Password Length
function generatePassword() {
  let result = "";

  for (var i = 0; i < 8; i++) {
    let picker = numberPicker()
    if (picker < 1.5) {
      result += String.fromCharCode(getRandomAlpha(lowerCaseRange[0], lowerCaseRange[1]))
    } else if (picker < 2.5) {
      result += String.fromCharCode(getRandomAlpha(upperCaseRange[0], upperCaseRange[1]))
    } else if (picker < 3.5) {
      result += String.fromCharCode(getRandomInteger())
    }
    console.log(result, picker)
  }

  return result
}
  
function getRandomAlpha(min, max) {
  return Math.ceil(Math.random() * (max - min) + min)
}
function numberPicker() {
  return Math.random() * (3 - 1) + 1
}
function getRandomInteger() { 
  return Math.ceil(Math.random() * (57-48)+48)
}


var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
