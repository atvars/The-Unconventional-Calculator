/***************** Global Variables ***********************/
const zerro = 0;
let currentResult = zerro;

/***************** Functions ***********************/
// function to get users entered nr value
function getUsersNumberInput() {
  return parseInt(userInput.value);
}
// function for output
function output(operator, resultBefore, calcNumber) {
  const calcDescription = `${resultBefore} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}
// addition
function add() {
  const enteredNo = getUsersNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNo;
  output('+', initialResult, enteredNo);
}
// subtraction
function subtract() {
  const enteredNo = getUsersNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNo;
  output('-', initialResult, enteredNo);
}
// multiply
function multiply() {
  const enteredNo = getUsersNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNo;
  output('*', initialResult, enteredNo);
}
// devide
function devide() {}

/***************** Event Listeners ***********************/
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
