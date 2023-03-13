let arr = [2, 3, 4]

arr.forEach(function(element, index, arr){
    console.log(index,  element, arr);
})

arr.forEach((element, index, arr) =>{
    console.log("arrow:", "index no=",index, "element available=", element, arr);
})



const heros = ["nagraj", "doga", "dhruva", "maniraj"]

heros.forEach((el) => {console.log(el.toUpperCase())})

heros.map(function(element, index, arr){
    console.log(element, index, arr);
})