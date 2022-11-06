import jwt from 'jsonwebtoken';
export const checkLogin = async (req,res,next)=>{
    const {authorization} = req.headers;
    const token = authorization.split(" ")[1];

    const verify = await jwt.verify(token,process.env.SECRET_KEY);
    console.log(verify);
    next();
    
}