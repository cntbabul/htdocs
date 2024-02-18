
//Creating a promise
const promiseOne = new Promise(function(resolve, reject) 
{
    //Do an asyn Task
    //DB Call, crypto

    setTimeout(function(){
        console.log(`Async task is complete`);
        resolve();
    }, 1000)

})

//consuming apromise
promiseOne.then(function(){
    console.log(`Promise is resolved`);
}).catch(function(){
    console.log(`Promise is rejected`);
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log(`Async task 2`);
        resolve();
    }, 1000)
}).then(function(){
    console.log(`Promise consumed: 2`)
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
//DB call to get all users from database
resolve({username: "Dilip", email:"d@pw.live"})
      
},1000)
})

promiseThree.then(function(user){
    console.log(user);
}).catch(function(error){
   console.log("Error in getting user details");
});