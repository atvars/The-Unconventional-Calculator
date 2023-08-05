/***************** Global Variables ***********************/
const zerro = 0;
let currentResult = zerro;
let logEntries = [];
/***************** Functions ***********************/
// get users entered nr value
function getUsersNumberInput() {
  return parseInt(userInput.value);
}
// create output
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
  logEntries.push(enteredNo);
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
// divide
function divide() {
  const enteredNo = getUsersNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNo;
  output('/', initialResult, enteredNo);
}
/***************** Event Listeners ***********************/
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

numbers.push(8, 2);
