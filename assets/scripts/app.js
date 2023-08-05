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
  const logEntry = {
    operation: 'Add',
    previousResult: initialResult,
    byNumber: enteredNo,
    afterResult: currentResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}
// subtraction
function subtract() {
  const enteredNo = getUsersNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNo;
  output('-', initialResult, enteredNo);
  const logEntry = {
    operation: 'Subtract',
    previousResult: initialResult,
    byNumber: enteredNo,
    afterResult: currentResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}
// multiply
function multiply() {
  const enteredNo = getUsersNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNo;
  output('*', initialResult, enteredNo);
  const logEntry = {
    operation: 'Multiply',
    previousResult: initialResult,
    byNumber: enteredNo,
    afterResult: currentResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}
// divide
function divide() {
  const enteredNo = getUsersNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNo;
  output('/', initialResult, enteredNo);
  const logEntry = {
    operation: 'Divide',
    previousResult: initialResult,
    byNumber: enteredNo,
    afterResult: currentResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}
/***************** Event Listeners ***********************/
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
