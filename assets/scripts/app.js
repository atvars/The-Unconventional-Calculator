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
// do the function on when addition button is pressed
addBtn.addEventListener('click', add);

// subtraction
function subtract() {
  const enteredNo = getUsersNumberInput();
  const calcDescription = `${currentResult} - ${enteredNo}`;
  currentResult = currentResult - enteredNo;
  outputResult(currentResult, calcDescription);
}
// do the function on when subtraction button is pressed
subtractBtn.addEventListener('click', subtract);

function multiply() {}

function devide() {}
