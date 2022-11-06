export const checkLogin = async (req,res,next)=>{
    const {authoraization} = req.headers;
    const token = authoraization.split[1];
    console.log("from middelware",token);
    next();
    
}