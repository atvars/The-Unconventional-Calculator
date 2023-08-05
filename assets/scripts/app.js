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
// log
function writeLog(opp, prevResult, byNum, newResult) {
  const logEntry = {
    operation: opp,
    previousResult: prevResult,
    byNumber: byNum,
    afterResult: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}
// addition
function add() {
  const enteredNo = getUsersNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNo;
  output('+', initialResult, enteredNo);
  writeLog('Add', initialResult, enteredNo, currentResult);
}
// subtraction
function subtract() {
  const enteredNo = getUsersNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNo;
  output('-', initialResult, enteredNo);
  writeLog('Subtract', initialResult, enteredNo, currentResult);
}
// multiply
function multiply() {
  const enteredNo = getUsersNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNo;
  output('*', initialResult, enteredNo);
  writeLog('Multiply', initialResult, enteredNo, currentResult);
}
// divide
function divide() {
  const enteredNo = getUsersNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNo;
  output('/', initialResult, enteredNo);
  writeLog('Divide', initialResult, enteredNo, currentResult);
}
/***************** Event Listeners ***********************/
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
