// // let names = ["anurag", "satyam", "ayush", "ankur", "ajay"]

// // console.log(names);

// // console.log("The length of an Array is :", names.length);

// // console.log(names[4]);

// // names[4] = "ajay sir"

// // console.log(names[4]);


// //1. String
// let var1 = "I am happy to join PW Skills FSWD Course";
// console.log(typeof var1);

// //2. Number:-

// // i) Integer:
// let var2 = 9;
// console.log(typeof var2);


// // ii) Floating Value:
// let var3 = 10.2;
// console.log(var3);


// // iii) Infinity:
// let var4 = Number.POSITIVE_INFINITY;
// console.log(var4);


// // iv) Not a Number
// let var5 = NaN;
// console.log(typeof var5);


// // 3) BigInt
// let var6 = 1024n;
// console.log(var6);


// // 4) Boolean:
// let var7 = true;
// console.log(typeof var7);


// // 5) Undefined:
// let var8 = undefined;
// console.log(var8);


// // 6)Null:
// let var9 = null;
// console.log(var9);


// // 7) Sumbol:
// let var10 = Symbol("PW Skills");
// console.log(var10);


// // 8) Objects:-

// //  i) Array:
// let var11 = [ 1, 2, "PW"];


// // ii) Object:
// let var12 = { name: "PW Skills", course: "FSWD"};
// console.log(var12);


// //Create 2 valid variables and 2 invalid variables and print them onto the console. Comment the results and error messages.

// //Ans:

// //Valid variables
// let name = "PW Skills";
// console.log(name); // OUTPUT: pw skills

// let iAmHappy = true;
// console.log(iAmHappy); //Output: true

// // //Invalid Variables
// // let 1name = "PW Skills";
// // console.log(1name); // OUTPUT: syntaxError: Invalid or unexpected token

// // let var = 13
// // console.log(var); // OUTPUT: SyntaxError: Unexpected token 'var'

// //==================================================================================================
// //=============================Operators:-
// //===================================================================================================
// //Write a program that prints the multiplication table in the textbook format of any number specified.

// let number = 6;

// console.log(`${number} * 1 = ${number * 1}`);
// console.log(`${number} * 2 = ${number * 2}`);
// console.log(`${number} * 3 = ${number * 3}`);
// console.log(`${number} * 4 = ${number * 4}`);
// console.log(`${number} * 5 = ${number * 5}`);
// console.log(`${number} * 6 = ${number * 6}`);
// console.log(`${number} * 7 = ${number * 7}`);
// console.log(`${number} * 8 = ${number * 8}`);
// console.log(`${number} * 9 = ${number * 9}`);
// console.log(`${number} * 10 = ${number * 10}`);




// // 2. Write a program to perform all the arithmetic operations[except increment and decrement operators] of javascript of any two numbers stored in the variables num1 and num2. Also, print the results to the console.
// // Answer:--

// let num1 = 10;
// let num2 = 8;

// // Addition (+): Adds two values together
// console.log(`The addition of num1 and num2 = ${num1 + num2}`);

// // Subtraction (-): Subtracts one value from another
// console.log(`The Subtraction of num2 from num1 = ${num1 - num2}`);

// //Multiplication(*): Multiplies two value together.
// console.log(`The Multiplication of num1 and num2 = ${num1 * num2}`);

// //Division(/): Divides one value by another.
// console.log(`The Division of num1 by num2 = ${num1 / num2}`);

// //Modulus(%): Modulus returns the remainder of a division operation
// console.log(`The Result of Modulo operation of num1 and num2 = ${num1 + num2}`);

// //Exponential(**): raises to the power of.
// console.log(`The Exponential of num1 to num2 is ${10 ** num2}`);
// // Output: The addition of num1 and num2 = 18
// // The Subtraction of num2 from num1 = 2
// // The Multiplication of num1 and num2 = 80
// // The Division of num1 by num2 = 1.25
// // The Result of Modulo operation of num1 and num2 = 18
// // The Exponential of num1 to num2 is 100000000



// // 3. Write a program to find out the perimeter of a rectangle. Print the result to the console.
// // Answer:

// let length = 20;
// let width = 10;

// let perimeterOfRectangle = 2 * (length + width);
// console.log(`The Perimeter of the rectangle with length: ${length} and width: {width} = ${perimeterOfRectangle}`);


// OUTPUT: The Perimeter of the rectangle with length: 20 and width: {width} = 60


//4. Write a program to demonstrate the results of comparison operators. Note that both the truth and false condition for each operator must be specified.
//Answer: 

// //Equal
// let num1 = 12;
// let num2 = 12;
// console.log(num1 == num2); // true
// let num3 = 12;
// let num4 = 10;
// console.log(num3 == num4); //false


// // Not equal
// let num5 = 12;
// let num6 = 12;
// console.log(num5 != num6); // false
// let num7 = 12;
// let num8 = 10;
// console.log(num7 != num8); // true


// //Strictly Equal
// let num9 =  12;
// let num10 = 12;
// console.log(num9 === num10); //true

// let num11 =  12;
// let num12 = "12";
// console.log(num11 === num12); //false


// //Strictly not equal
// let num13 =  12;
// let num14 = 12;
// console.log(num13 !== num14) //false
// let num15 =  12;
// let num16 = "12";
// console.log(num15 !== num16); // true


// //greater than
// let num17 = 13;
// let num18 = 12;
// console.log(num17 > num18); // true
// let num19 = 10;
// let num20 = 12;
// console.log(num19 > num20); //false

// //Greater than or equal to
// let num21 = 13;
// let num22 = 12;
// console.log(num21 >= num22); //true

// let num23 = 10;
// let num24 = 12;
// console.log(num23 >= num24); //false


// //less than
// let num25 = 12;
// let num26 = 13;
// console.log(num25 < num26); // true

// let num27 = 12;
// let num28 = 10;
// console.log(num27 < num28);


// // Lesser than or equal to
// let num29 = 12;
// let num30 = 12;
// console.log(num29 <= num30); // true

// let num31 = 12;
// let num32 = 10;
// console.log(num31 <= num32); // false



// // 1. Write a program of traffi control that accepts the traffic light displayed and prints the message. If the traffic is red print the vehicles must stop.
// // Answer:-

// let traffiLight = "orange";
// if (trafficLight == "red"){
//     console.log("Vehicles must stop.");
// } else if (trafficLight == "orange"){
//     console.log("Vehicles must wait. The signal is changing to red or green.");
// } else if (traffiLight == "green"){
//     console.log("Vehicles may proceed with caution.");
// } else {
//     console.log("Invalid traffic Light");
// }

// // 2. Write a program to print the largest of 2 numbers.
// // Ans:

// let num33 = 20;
// let num34 = 15;

// if (num33 > num34){
//     console.log("num33 is greater than num34");
// } else {
//     console.log("num34 is greater than num33");
// }


// // 3. Write a program that takes a number as input and outputs “Fizz” if it is divisible by 3, “Buzz” if it is divisible by 5, and “FizzBuzz” if it is divisible by both 3 and 5. Note that any number can be passed and not restricted to the numbers divisible by 3 or 5.
// // Ans: 

// let num = 5;

// if (num % 5 == 0 && num % 3 == 0) {
//     console.log("FizzBuzz");
// } else if ( num % 3 == 0){
//     console.log("Fizz");
// }else if (num % 5 == 0){
//     console.log("Buzz");
// } else {
//     console.log("Invalid input");
// }



// //============================Switch Case=============================
// //1. Write a program that takes in a day of week (e.g. Monday, Tuesday etc) and outputs the number of days until the weekend.
// //Ans:

// const day = "Tuesday";

// let daysUntilWeekend;


// switch (day) {
//     case "Monday":
//         console.log(`There are 5 day(s) until the weekend.`);
//         break;

//         case "Monday":
//             console.log(`There are 5 day(s) until the weekend.`);
//             break;

//             case "Monday":
//                 console.log(`There are 5 day(s) until the weekend.`);
//                 break;

//                 case "Monday":
//                     console.log(`There are 5 day(s) until the weekend.`);
//                     break;

//                     case "Tuesday":
//                         console.log(`There are 4 day(s) until the weekend.`);
//                         break;

//                         case "Wednesday":
//                             console.log(`There are 3 day(s) until the weekend.`);
//                             break;

//                             case "Thursday":
//                                 console.log(`There are 2 day(s) until the weekend.`);
//                                 break;
//                                 case "Friday":
//                                     console.log(`There are 2 day(s) until the weekend.`);
//                                     break;

//                                     case "Saturday":
//                                         console.log(`There are 1 day(s) until the weekend.`);
//                                         break;

//                                         case "Sunday":
//                                             console.log(`There are 0 day(s) until the weekend.`);
//                                             break;

//     default:
//         daysUntilWeekend = "Invalid Day";
//         break;
// }



// // 2. Write a program that takes in a number between 1 and 12 and outputs the corresponding month of the year.
// //Ans: 

// const monthNumber = 1;

// switch (monthNumber){
//     case 1:
//     console.log("January");
//         break;

//     case 2:
//     console.log("February");
//         break;

//     case 3:
//     console.log("March");
//         break;

//     case 4:
//     console.log("April");
//     break;

//     case 5:
//     console.log("May");
//         break;

//     case 6:
//     console.log("June");
//         break;

//     case 7:
//     console.log("July");
//         break;

//     case 8:
//     console.log("August");
//         break;

//     case 9:
//     console.log("September");
//         break;

//     case 10:
//         console.log("October");
//         break;
                                            
//     case 11:
//         console.log("November");
//         break;

//     case 12:
//         console.log("December");
//         break;
//     default:
//         console.log("Invalid Month Number");    
                                                                  
// }

// // ======================TERNARY CONDITIONS
// // 1.Write a program that takes in a number and outputs whether it is positive,negative, or zero.
// //Ans:-

// let number = 0;
// number == 0
//     ? console.log("The number is zero")
//     :number > 0
//     ? console.log("The number is greater than zero")
//     :console.log("The number is lesser than zero");


//  //   2.Create a program that takes in two numbers and prints the larger one.
//  Ans:

//     let num35 = 10;
//     let num36 = 10;

//     num35 == num36
// ? console.log("Both the numbers are equal.")
// :num1 > num2
// ? console.log(`The larger number among the two numbers is ${num1}.`)
// : console.log(`The larger number among the two numbers is ${num2}.`);





//LOOPS
// 1.Write a program that generates the multiplication table in the textbook format for a given number.
//Ans:

let number1 = 5;

for (let i = 1; i <= 10; i++){
    console.log(`${number1} * ${i} = ${number1 * i}`);
}


// 2. Write a program that prints all the positive even numbers till the number specified.
// Ans:

let number2 = 10;

for (let i = 1; i <= number2; i++){
    if (i % 2 == 0) {
        console.log(i);
    }
}









