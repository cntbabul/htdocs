const powerTwo = (n) => {
    return n = n**2
}

function powerCube(powerTwo, n) {
    return powerTwo(n) * n
}

console.log(powerCube(powerTwo,3));
//==============================================
function sayHello(){
    return () => {
    console.log("Hello Hitesh");
}}


let guessValue = sayHello()
console.log(guessValue);
guessValue()

//===============================================
const higherOrder = n => {
    const oneFun = m =>{
        const twoFun = l => {
            return l + m + n
        };return  twoFun 
    };return oneFun
};

console.log(higherOrder(2)(3)(4));
