const name = "hitesh";
const repoCount = 50;

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String("hiteshhc");

console.log(gameName[2]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('t'));
console.log(gameName.charAt(2));

const gameName1 = new String("hitesh-hc");

const newString = gameName1.substring(0,4)// negative value not allowed

console.log(newString);//hite

const anotherString = gameName1.slice(-8,4)
console.log(anotherString);//ite

const newStringOne = "   hitesh  ";


console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url);
console.log(url.replace('%20','-'));
console.log(url.includes('hitesh'));//true
console.log(url.includes("babul"));//false

console.log(gameName1.split("-"));//['hitesh','hc']