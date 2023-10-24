const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach (function (val) {
    //console.log(val);
})

coding.forEach( (item) =>{
    //console.log(item);
} )

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

coding.forEach((item, index, coding) => {
        console.log(item, index, coding);
})


const myCoding = [
    {
        languageName:"javascript",
        languageFile: "js",
    },
    {
        languageName: "java",
        languageFile: "java"
    },
    {
        languageName: "python",
        languageFile:  "py"
    }

]

myCoding.forEach((item) => {
    console.log(item.languageName);
})










