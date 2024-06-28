// Syntax Error, RunTime Error, 
//what is class in javascrip?
//

class product{
        name;
        price;
        rating;

        constructor(n, p, r){
            console.log("calling the constructor");
            this.name = n;
            this.price = p;
            this.rating = r;
        }

       display(){
        console.log("displaying the current product");
       }
}

const p = new product("iphone", 1000, 5);// constructor function ==empty plain object
console.log(p);
// p.display();


