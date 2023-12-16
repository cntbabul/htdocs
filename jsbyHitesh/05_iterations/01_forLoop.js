//for
//for (let index = 0; index < array.length; index++) {
//    const element = array[index];
//    
//}

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("i = 5, checked");
        
    }
    console.log(element);
    
}


for (let i = 0; i <= 10; i++) {
    //console.log(`Outer Loop: ${i}`);
    for (let j = 0; j <= 10; j++) {
            //console.log(`Inner loop value: ${j}`);
            //console.log(i + "*" + j +"=" + i*j);
        }
    
}

let myArray = ["superman", "batman", "ironman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

//break and continue
//for (let index = 0; index <=20; index++) {
//    if (index ==5) {
//        console.log("5 detected");
//        break;
//    }
//    const element = index;
//    console.log(element);
//    
//}

for (let index = 0; index <=20; index++) {
    if (index ==5) {
        console.log("detected");
        continue;
    }
    const element = index;
    console.log(element);
    
}
