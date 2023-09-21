const oneArray = [1, 2, 3, 4]
const twoArray = [4, 5, 6, 7]
console.log(oneArray.concat(twoArray));
//===========================================================
 const threeArray = oneArray.concat(twoArray);
 console.log(threeArray);
 //============================================================
const threeeArray = [...oneArray, ...twoArray]
console.log(threeeArray);
