import User from "../models/User.js"

export const findUserByProperty = (key,value) =>{
    //console.log("findUserBY is coming",key,value)
    if(key=='_id'){
        return User.findById(value)
    }
    //console.log("value: in user service :",value)
    const u = User.findOne({email:value})
    //console.log("u is :",u);
    return u;

};
export const createNewUser = ({name,email,password})=>{
    const user = new User({name,email,password});
    return user.save();
}