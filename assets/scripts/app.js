// variables
const zerro = 0;
let currentResult = zerro;

// Functions



// addition
function add() {
  const enteredNo = parseInt(userInput.value);
  const calcDescription = `${currentResult} + ${enteredNo}`;
  currentResult = currentResult + enteredNo;
  outputResult(currentResult, calcDescription);
}
// do the function on when addition button is pressed
addBtn.addEventListener('click', add);

// subtraction
function subtract() {
  const enteredNo = parseInt(userInput.value);
  const calcDescription = `${currentResult} - ${enteredNo}`;
  currentResult = currentResult - enteredNo;
  outputResult(currentResult, calcDescription);
}
// do the function on when subtraction button is pressed
subtractBtn.addEventListener('click', subtract);

function multiply() {}

function devide() {}
