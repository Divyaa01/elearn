import { User } from "../models/user.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import sendMail from "../middlewares/sendMail.js";
import TryCatch from "../middlewares/TryCatch.js";


export const register = TryCatch(async(req, res) => {
    const {email,name,password} = req.body;

    let user = await User.findOne({email});

    if(user) return res.status(400).json({
        message : "User already exists",
    });

    const hashPassword = await bcrypt.hash(password,10);

    user = {
        name,
        email,
        password : hashPassword, //hashed password
    };

    const otp = Math.floor(Math.random()* 1000000); //6 digit otp

    const activationToken = jwt.sign({
        user,
        otp,
    }, process.env.Activation_Secret,{
        expiresIn: "5m" , //expiresin 5 min , activation secret in dotenv
    });


    const data = {
        name,
        otp,
    };

    await sendMail(
        email,
        "E-learn",
        data
    )

    res.status(200).json({
        message: "otp sent to your email",
        activationToken,
    });
});

    


export const verifyUser = TryCatch(async(req,res)=>{
const {otp, activationToken} =req.body;

const verify = jwt.verify(activationToken, process.env.Activation_Secret);

if(!verify) return res.status(400).json({
    message: "Otp Expired",
});

if(verify.otp !== otp) return res.status(400).json({
    message: "Otp Invalid",
});

await User.create({
    name: verify.user.name,
    email: verify.user.email,
    password: verify.user.password,
})
res.json({
    message: "User registered!",
});

});

export const loginUser = TryCatch(async(req,res)=>{
    const {email, password} =req.body

    const user = await User.findOne({email})

    if(!user) return res.status(400).json({
        message: "Invalid email "
    });
    
    const matchPassword = await bcrypt.compare(password, user.password);

    if(!matchPassword) return res.status(400).json({
        message: "Invalid password "
    });

    const token =  jwt.sign({_id: user._id}, process.env.Jwt_Sec, {
        expiresIn : "15d",
    });

    res.json({
        message: `Welcome back, ${user.name}`,
        token,
        user,
    });
    
});

export const myProfile = TryCatch(async(req,res)=>{

    const user = await User.findById(req.user._id)

    res.json({user});


});