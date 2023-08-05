// variables
const zerro = 0;
let currentResult = zerro;

// Functions
// function to get users entered nr value
function getUsersNumberInput() {
  return parseInt(userInput.value);
}

// addition
function add() {
  const enteredNo = getUsersNumberInput();
  const calcDescription = `${currentResult} + ${enteredNo}`;
  currentResult = currentResult + enteredNo;
  outputResult(currentResult, calcDescription);
}
// subtraction
function subtract() {
  const enteredNo = getUsersNumberInput();
  const calcDescription = `${currentResult} - ${enteredNo}`;
  currentResult = currentResult - enteredNo;
  outputResult(currentResult, calcDescription);
}
// multiply
function multiply() {}
// devide
function devide() {}

//event listeners
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
