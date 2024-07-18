function sayMyName (){
    console.log("hi");
    console.log("te");
    console.log("sh");
}

sayMyName();


// function addTwoNumbers(number1, number2) {//parameters number1, number2
//     console.log(number1 + number2);
// }
// addTwoNumbers(1,2);//arguments 1,2


//console.log(addTwoNumbers());

function addTwoNumbers(number1,number2){
        //let result = number1 + number2
        //return result;
        return  number1 + number2
}
const result  =     addTwoNumbers(3,5)
console.log("Result:", result);



function loginUserMessage (username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}


console.log(loginUserMessage("hitesh"));


function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000));


const user  = {
    username:"hitesh",
    price:199 
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)

handleObject({
    username:"sam",
    price:399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[2]
}

//console.log(myNewArray);
console.log(returnSecondValue(myNewArray));




