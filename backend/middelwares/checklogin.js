import jwt from 'jsonwebtoken';
import { error } from '../utils/error.js';
export const checkLogin = async (req,res,next)=>{
    const {authorization} = req.headers;
    const token = authorization.split(" ")[1];
    try{
        const verify = await jwt.verify(token,process.env.SECRET_KEY);
        const {name,email} = verify;
        req.name=name;
        req.email=email;
        next();
    }catch(err){
        next(err);
    }
    
}