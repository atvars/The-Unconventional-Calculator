// global variables
const dafaultResult = 0;
let currentResult = dafaultResult;

// Functions
// additition function
function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

currentResult = currentResult + 10;

currentResult = add(3, 5);

let calculationDescription = `${dafaultResult}  + ${currentResult}`;




outputResult(currentResult, calculationDescription);

