const marvel_heros = ["thor", "ironman", "hulk"];
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);
//[ 'thor', 'ironman', 'hulk', [ 'superman', 'flash', 'batman' ] ]

const allHeros = marvel_heros.concat(dc_heros);
//console.log(allHeros);//[ 'thor', 'ironman', 'hulk', 'superman', 'flash', 'batman' ]


const allHerosSpread = [...marvel_heros,...dc_heros];
//console.log(allHerosSpread);//[ 'thor', 'ironman', 'hulk', 'superman', 'flash', 'batman' ]


const anotherArray = [1, 2, 3, [4,5,6], 7, [6,7,[4,5]]];
const flatAnotherArray = anotherArray.flat(Infinity);
// console.log(flatAnotherArray);[
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]

console.log(Array.isArray("hitesh"));//false
console.log(Array.from("hitesh"));//[ 'h', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name:"hitesh"}));// empty array []

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));//[100, 200, 300]