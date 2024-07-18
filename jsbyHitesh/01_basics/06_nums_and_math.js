const score = 400;
console.log(score);

const balance = new Number(100);

console.log(balance);
console.log(balance.toString().length);//3
console.log(balance.toFixed(2));// 100.00

const anotherNumber = 23.5966;
console.log(anotherNumber.toPrecision(4));//23.60
console.log(anotherNumber.toPrecision(2));//24

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));//1,00,00,000



//=========================================================================
//====================Maths=============================================
//========================================================================
console.log(Math);
console.log(Math.abs(-4));//4
console.log(Math.round(7.4));//7
console.log(Math.floor(7.8));//7
console.log(Math.ceil(7.3));//8
console.log(Math.sqrt(25));//5

console.log(Math.random());
console.log((Math.random())*10) +1;
const number1 = Math.random()*10 +1;
console.log(Math.floor(number1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() *  (max - min + 1)) + min);


