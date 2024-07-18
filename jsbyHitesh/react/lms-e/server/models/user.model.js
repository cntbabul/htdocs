import crypto from 'crypto';

import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


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
    avatar:{public_id:{
        type:'String'},
        secure_url:{type:'String'}
},
    role:{
        type:'String',
        enum:['USER', 'ADMIN'],
        default:'USER'
    },

forgotPasswordToken:String,
forgotPasswordExpiry: Date
},{
    timestamps:true
});


const User = model('User', userSchema);

export default User;