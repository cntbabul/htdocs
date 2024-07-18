const user = {
    username : "hitesh",
    email : "hitesh@gmail.com",
}

const {username , email} =  user

const myArray = [ 
    {
        username : "soaib",
        email : "soaib@gmail.com" 
    },
    {
        username : "prem",
        email : "prem@gmail.com"
    },
    {
        username : "Gobind",
        email : "gobind@gmail.com"
    }
]



let pwcourse = {
    coursename: "pw1",
    price: 1299,

    getCourseDetails: function(){
        console.log(`Course name: ${this.courseName} and price is ${this.price}`)
    }
}

Object.prototype.hitesh = function(){
    console.log(`Hitesh was here`)
}

pwcourse.getCourseDetails()
pwcourse.hitesh()
myArray.hitesh()

const anewString = "Yatin"

anewString.hitesh()