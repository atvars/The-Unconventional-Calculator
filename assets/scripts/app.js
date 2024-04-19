// global variables
const dafaultResult = 0;
let currentResult = dafaultResult;

// adding function
function add(num1, num2) {
  const result = num1 + num2;
  alert(`the result is: ${result}`);
}

currentResult = currentResult + 10;

let calculationDescription = `${dafaultResult}  + 10`;

outputResult(currentResult, calculationDescription);

add(3,5)