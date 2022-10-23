import User from '../models/User.js'

 export const registerController = async(req,res,next)=>{
    try{
        const {username,email,password} = req.body;
        console.log(username);

    }catch(e){
        next(e);
    }
   
}
