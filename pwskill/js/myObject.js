const Obj1 = {
    name : "John",
    role : "Developer",
    isLoggedIn : true,

    registeredUser : function (name , email) {
        console.log(`${this.name} is a registeredUser!  `)
    }
}

const Obj2  ={
    10 : "number10",
    20 : "number20"
}

//const key1 = Symbol()
const key1 = Symbol("key1")
const key2 = Symbol("key2")

const Obj3 = {
    [key1] : "hitesh",
    [key2] : "pwskill"
}

console.log(Obj3);
console.log(Obj3[key1]);

const Obj4 = new object();
Obj4.email = "hitesh@gmail.com";
