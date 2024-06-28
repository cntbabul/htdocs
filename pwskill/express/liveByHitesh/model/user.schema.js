import  Mongoose  from "mongoose";


const usersSchema = new mongoose.Schema(
    { 
        name: {
            type:string,
            required:[true, 'Name is required'],
            maxLength:[50, 'Name should be less than 50 characters'],
            trim:true
        }, 
        email: {
            type:string,
            required:[true],
            lowercase:true,
            trim:true

        },
        password:String,
        age: Number 
        
    });



export default mongoose.model("user", usersSchema)