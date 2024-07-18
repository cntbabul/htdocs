// 2.Calculator
// Create a javascript program that takes in two numbers and a string operator. Make use of a switch statement to perform the operation on the two numbers.

// The Calulator function should:
// * Take in two numbers, num1 and num2, and a string representing a mathematial operator, operator.
// * Use a swith statement to determine which operation to perform based on the value of the operator.
// * If the operator is one of the four valid operators(+,-,*,/), perform the corresponding matheatical operatiion and store the result in a variable called result.
// * If the operator is not one of the valid operators,log "Invalid operator" to the console.


function calculate(num1, num2, operator) {
    "use strict";
  
    let result;
  
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          console.error("Error: Division by zero");
        }
        break;
      default:
        console.error("Invalid operator");
    }
  
    return result;
  }
  
  // Example usage:
  const num1 = 10;
  const num2 = 5;
  const operator = "*";
  
  const result = calculate(num1, num2, operator);
  
  if (result !== undefined) {
    console.log(`${num1} ${operator} ${num2} = ${result}`);
  }
  