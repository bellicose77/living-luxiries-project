import User from "../models/User"

export const findUserByProperty = (key,value) =>{
    if(key=='_id'){
        return User.findById()
    }
    return User.find({email:value});

}