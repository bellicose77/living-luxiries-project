const User = require('../models/User');

 export const registerController = async(req,res,next)=>{
    try{
        const {name,email,password} = req.body;
        console.log(name);

    }catch(e){
        next(e);
    }
   
}