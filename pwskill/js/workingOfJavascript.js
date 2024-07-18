// 01. Write a function called "addNumbers" that takes two numbers as arguments and returns their sum. Call the function before it is declared to demonstrate hoisting.

console.log(addNumbers(5,8)); //13

function addNumbers(num1, num2) {
    return num1 + num2;
}

//================================================================================================



// 02. Write a function called "multiplyNumbers" that takes two numbers as arguments and returns their product. Use function expressions to define the function and call the function before it is declared to demonstrate hoisting.

//console.log(multiplyNumbers(3, 4)); // ReferenceError: Cannot access 'multiplyNumbers' before initialization

const multiplyNumbers = function (num1, num2){
    return num1 * num2 ;
}

//======================================================================================================
// 03. Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside the function using the var keyword and log its value to the console before it is assigned a value to demonstrate variable hoisting.

function addNumbers2(num3, num4) {
    console.log(sum); //undefined 
    var sum;
    sum = num3 + num4;
   
    return sum 
}
console.log(addNumbers2(5, 10));// 15

//=============================================================================================================

// 04. Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign them values and log their values to the console before and after they are declared to demonstrate variable hoisting.

//console.log(x); // undefined
//console.log(y); // Cannot access 'y' before initialization
console.log(z);  // Cannot access 'z' before initialization
//
var x = "pw";
let y = "skills"
let z = "!";

console.log(x); //pw
console.log(y); //skills
console.log(z); //!

//======================================================================================================================
// 05. Declare a variable using let inside a block scope and attempt to log its value to the console before it is assigned a value to demonstrate the temporal dead zone.
{
    console.log(x); //error
    let x = "hello";
    console.log(x); //hello
}


//=========================================================================================================================================



