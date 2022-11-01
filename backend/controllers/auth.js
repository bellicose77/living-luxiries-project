import jwt from 'jsonwebtoken'
import { registerService } from '../services/auth.js';

 export const registerController = async(req,res,next)=>{
    const {username,email,password} = req.body;
    try{
        const user = await registerService({username,email,password}) 
        
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
