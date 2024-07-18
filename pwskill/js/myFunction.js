function sayHello() {
    console.log("Hello!!!!!")
    console.log("Hitesh")
}

function addTwoNum(num1, num2){
    let result = num1 + num2
    return result
}

const result = addTwoNum(5, 8);
//console.log(result)


function registerPwUser(user) {
    if (user === undefined) {
        return "Please pass the username"
    }

    return user + ' is a registered at pw'
}

// console.log(registerPwUser())

// Amazon shopping cart

function cartBillTotal(...numbers) {
    //take a variable total
    let total = 0;
    //loop all values and keep adding total
    for (const num of numbers) {
        total += num
        total = total + num 
    }
    //return total
    return total;
}

const user = {
    id : "123",
    name : "Rishav",
    email : "rishav@pw.live"
}

function addUser(Obj) {
    console.log(`A user name ${Obj.name} got an email ${Obj.email}`);
}

addUser(user);