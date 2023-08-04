// variables
const zerro = 0;
let currentResult = zerro;

// Functions
function add() {
  currentResult = currentResult + parseInt(userInput.value);
  outputResult(currentResult, ' ');
}

addBtn.addEventListener('click', add);
