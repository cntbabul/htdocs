function createPromise(){
    return new Promise(function exec(resolve, reject){
        setTimeout(function f(){
            console.log("timer done");
         },3000);
    });
}


console.log("start");
let x = createPromise();
console.log("got a new promise");