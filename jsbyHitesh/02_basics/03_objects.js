//singleton
//object.const

//Object literals

const mysym = Symbol("key1")
const jsUser = {
    name: "hitesh",
    "full name": "hitesh choudhury",
    [mysym]: "key2",
    age:18,
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoogedinDays: ["monday", "Saturday"]

}


//console.log(jsUser.email);
//console.log(jsUser["email"]);
//console.log(jsUser["full name"]);
//console.log(jsUser[mysym]);
//
//jsUser.email = "hitesh@changemail.com";
//Object.freeze(jsUser);
//jsUser.email = "hitesh@freeze.com";
//console.log(jsUser.email);
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());