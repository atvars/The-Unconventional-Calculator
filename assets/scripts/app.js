// global variables
const dafaultResult = 0;
let currentResult = dafaultResult;

// Functions
// additition function
function add() {
  currentResult = currentResult + parseInt(userInput.value);
  outputResult(currentResult, '');
}

// currentResult = currentResult + 10;

// currentResult = add(3, 5);

addBtn.addEventListener('click', add)

let calculationDescription = `${dafaultResult}  + ${currentResult}`;





