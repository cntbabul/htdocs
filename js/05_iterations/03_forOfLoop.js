//for of

// ["", "", ""]
//[{}, {}, {}]


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
     console.log(num);
}
for (const key in arr) {
    console.log(key);
    console.log(arr[key]);
}

const greetings = "Hello World !"

for (const greet of greetings) {
   // console.log(`Each char is ${greet}`);
}

//maps============================================================

const map = new Map()
map.set('IN', 'India')
map.set('BD', 'Bangladesh')
map.set('IR', 'Iran')
map.set('IR', 'Ireland')

//console.log(map);

for (const data of map) {
   // console.log(data);
}
for (const [key,value] of map) {
    //console.log(key, ":-", value);
}

// const myObject = {
//     'game1': 'PUBG',
//     'game2': 'Free Fire',
//     'game3': 'Foot Ball'
// }
// for (const [key,value] of myObject) { //myObject is not iterable
//     //console.log(key,value);
// }


const myObject = {
   game1 : 'PUBG',
   game2 : 'Free Fire',
   game3 : 'Foot Ball'
}

for (const key in myObject){
    //console.log(`${key} :- ${myObject[key]}`);
}



