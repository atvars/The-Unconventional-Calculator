// variables
const zerro = 0;
let currentResult = zerro;

// Functions
function add() {
  const enteredNo = parseInt(userInput.value);
  const calcDescription = `${currentResult} + ${enteredNo}`;
  currentResult = currentResult + enteredNo;
  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);
