// variables
const zerro = 0;
let currentResult = zerro;

// Functions
function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

// storing add result in variable
// const additionResult = add(2,2);

//  displaying addition reslut
currentResult = add(4, 6);

// let desc = '(' + zerro + ' + 10)'
let desc = `( ${zerro} + 10 )`;

outputResult(currentResult, desc);

add(5, 6);
