//no name or identity
let x = function (){

    console.log("hello");
}

x();

//immediately invoke function

// (function exec(){
//     console.log("named");
// })();

(function (x){
    console.log(x*x);
})(7);

//============================================================================================================================
let obj = {id:101, name:"sabana", salary:20000};
console.log(obj);