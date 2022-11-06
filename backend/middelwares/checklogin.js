export const checkLogin = async (req,res,next)=>{
    const {authorization} = req.headers;
    const token = authorization.split(" ")
    console.log(token);
    next();
    
}