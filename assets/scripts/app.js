// global variables
const dafaultResult = 0;
let currentResult = dafaultResult;
let logEntries = [];

// Functions

// function to covert users entered value(string) as number
function getUserNumberInput() {
  return parseInt(userInput.value);
}
// function to dsiplay calculation and result
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // function from vendor file
}

// additition function
function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
  logEntries.push(`${initialResult} + ${enteredNumber} = ${currentResult}`);
  console.log(logEntries);
}

// subtraction function
function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
  logEntries.push(`${initialResult} - ${enteredNumber} = ${currentResult}`);
  console.log(logEntries);
}

// multiplying function
function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
  logEntries.push(`${initialResult} * ${enteredNumber} = ${currentResult}`);
  console.log(logEntries);
}

// deviding function
function devide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
  logEntries.push(`${initialResult} / ${enteredNumber} = ${currentResult}`);
  console.log(logEntries);
}

// adding event listeners to the buttons
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', devide);
