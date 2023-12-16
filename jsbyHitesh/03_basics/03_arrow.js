const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website `);
    }

}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()