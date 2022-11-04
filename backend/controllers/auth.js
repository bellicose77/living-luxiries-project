import jwt from 'jsonwebtoken'
import { loginService, registerService } from '../services/auth.js';
import { error } from '../utils/error.js';

 export const registerController = async(req,res,next)=>{
    const {name,email,password} = req.body;
    try{
        if(!name || !email || !password){
            throw error("Invalied data ",400)
        }
        const user = await registerService({name,email,password});
        console.log(user)
        if(!user){
            throw error("User has not found",400);
        }
        
        // await user.save();
        res.status(200).json({'message':"usercreated successfully",user})

    }catch(e){
        next(e);
    }
};

export const logingController = async(req,res,next)=>{
    const {email,password} = req.body;
     
    try{
        const user = await loginService({email,password})
        return res.status(200).json({'access_token':user})
        

    }catch(err){
        next(err)
    }
}
