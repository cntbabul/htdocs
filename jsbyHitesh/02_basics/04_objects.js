//const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;


console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("name"));
//console.log(tinderUser);

const regularUser = {
    email:"user@mail.com",
    fullName:{
        firstName:"hitesh",
        lastName: "choudhury"
    }
}
//console.log(regularUser.fullName.firstName);
//console.log(regularUser.fullName);
  

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

//const obj3 = {obj1,obj2}//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
//const obj3 =Object.assign({},obj1, obj2)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1,...obj2}
//console.log(obj3);



const users = [
    {
        ide:1,
        name:"user1"
    }
]
//users[1].email;










