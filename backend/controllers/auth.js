import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

 export const registerController = async(req,res,next)=>{
    const {username,email,password} = req.body;
    try{
        const saltRound =10;
        const salt = bcrypt.genSaltSync(saltRound);
        const hash = bcrypt.hashSync(password,salt);
         const user = new User({username,email,password:hash});
        await user.save();
        res.status(200).json({'message':"usercreated successfully",user})

    }catch(e){
        next(e);
    }
};

export const logingController = async(req,res,next)=>{
    const {username,password} = req.body;
     
    try{
        const user = await User.findOne({username:username});
        if(!user){
            return res.status(400).json({'message':"Invaild user"})
        }
        const isPasswordCorrect = bcrypt.compare(password,user.password)
        if(!isPasswordCorrect){
            return res.status(400).json({"message":"invaild password"})
        }
        else{
            res.status(400).json({'message':"password match",user})
        }
        //console.log("loging frontend",username)

    }catch(err){
        next(err)
    }
}
