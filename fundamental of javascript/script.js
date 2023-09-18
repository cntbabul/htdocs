// Variable and Values
//Operators

//Conditions and Loops

let age = 17
if (age>=18){

    console.log("You are Allowed");
}
else {
    console.log("You are not Allowed");

}

console.log("=======================================================================");

let signal = "Green"
if (signal == "red") {
    console.log("Red =>STOP");
}
 else if(signal == "Yellow"){
     console.log("Yellow => Go Slow");
 }
 else {
     console.log("Green => Go Fast");
 } 


 console.log("=======================================================================");
 //============================Switch case=====================================
let user = "Admin"
switch (user){
    case "Admin":
        console.log("He is Admin");
        break
        case "Student":
            console.log("He is Student");
            break
            case "Mentor":
                console.log("He is Mentor");
                case "Deafult":
                break;
                console.log("default");

}

console.log("=======================================================================");

//for, while loop, do while loop
for (let i=0; i<5; i++){
    console.log(i);
} 
;
