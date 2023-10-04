import User from "../models/user.model.js";
import AppError from "../utils/error.utils";

const register = asyncHandler(async (req, res) => {
    const {fullName, email, password} = req.body;
    if (!fullName || !email || !password ){
        return new AppError('All fields are required',400);
    }

    const userExists = await User.findOne({email});
    if (userExists){
        return next(new AppError('email already exist', 400));
    }

    const user = await User.create({
        fullName,
        email,
        password,
        avatar:{
            public_id:email,
            secure_url:'./profile.png'
        }
    });

    if (!user){
        return next(new AppError('User Registration Failed', 400));
    }
    //TODO:File Upload
      await user.save();

});

const login = (req, res) => {

};

const logout = (req, res) => {

};

const getProfile = (req, res) => {

};

export{
    register,
    login,
    logout,
    getProfile
}