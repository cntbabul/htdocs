









//===========================================
//number => 
// bigint
//string => ""
// boolean => true/false
//null => standalone value(empty)
//undefine => not defined
//symbol => unique

//object

//console.log(typeof undefined);// undefined
//console.log(typeof null); //object




//===========================================




//========================================================================
//==============Data Types Summary=======================================
//======================================================================

//Primitive Data Type:
//  7 Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

//Non Primitve Data Type:Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]// array

const object = {
    name: "hitesh",
    age: 30,
}


const myFunction = function() {
console.log("hello World");    
}


//console.log(heros);
//console.log(object);

//Js dynamically typed: no need to declare datatype (int,number,boolean etc)

// Stack:=(Primitive dataType us stack memory), 
//Heap:=(reference datatype us Heap Memory) (memory)

let myName = "babulMiah";
let anotherName = myName;
anotherName = "babu";

console.log(anotherName);
console.log(myName);


let user1 = {
    email: "babul@miah.com",
    upi: "babul@ybl"
}
let user2 = user1;

user2.email = "babul@1mg.com";

console.log(user1);
console.log(user2);

