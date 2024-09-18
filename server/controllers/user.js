import { User } from "../models/user.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import sendMail from "../middlewares/sendMail.js";


export const register = async(req, res) => {
    try{
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
    }
    catch(error){
        res.status(500).json({
            message: error.message,
        });
    }
};