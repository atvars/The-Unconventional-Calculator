// variables
const zerro = 0;
let currentResult = zerro;

// Functions
function add() {
  currentResult = currentResult + userInput.value;
  outputResult(currentResult, ' ');
}

addBtn.addEventListener('click', add);
