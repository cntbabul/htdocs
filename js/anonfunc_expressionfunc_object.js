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
//====================================================
let emp = new Object();
emp.id = 102;
emp.name = "sami";
emp.salary = 25000;
console.log(emp);
console.log(obj);
//==========================================
function Emp(i, n, s){
    this.id = i;
    this.name = n;
    this.salary =s;
}
const e = new Emp(103, "sunu", 26000);
console.log(e);
console.log(Object.ids);