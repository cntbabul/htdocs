import { Schema, model } from "mongoose";


const userSchema = new Schema({
    fullName:{
        type:'String',
        required:[true, 'Name is require'],
        minLength:[5, 'Name must be atleast 5 character'],
        maxLength:[50, 'Name should be less than 50 characters'],
        lowercase:true,
        trim:true
    },
    email:{
        type:'String',
        required:[true],
        lowercase:true,
        trim:true,
        unique:true,


    },
    password:{
    type:'String',
    required:[true, 'Password is required'],
    minLength:[8, 'Password must be atleast 8 character'],
    select:false

    },
    avatar{public_id:{
        type:'String'},
        secure_url:{type:'String'}
},
forgotPasswordToken:'String',
forgotPasswordExpiry: Date
});


const User = model('User', userSchema);

export default User;