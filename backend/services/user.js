import User from "../models/User.js"

export const findUserByProperty = (key,value) =>{
    if(key=='_id'){
        return User.findById(value)
    }
    return  User.findOne({email:value})
   

};
export const createNewUser = ({name,email,password})=>{
    const user = new User({name,email,password});
    return user.save();
}