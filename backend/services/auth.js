import { error } from "../utils/error.js";
import bcrypt from 'bcrypt';
import { createNewUser, findUserByProperty } from "./user.js"

export const registerService = async ({name,email,password})=>{
    //console.log("register service comming ")
    // console.log("from the beginin",name,email,password);
        const user = await findUserByProperty('email',email);
        //console.log("USER form findUser",user)
        if(user){
            throw error("User is already exits",400);
        }
        const saltRound =10;
        const salt = bcrypt.genSaltSync(saltRound);
        const hash = bcrypt.hashSync(password,salt);
        return createNewUser({name,email,password:hash});
};

export const loginService = ({email,password})=>{
    const user = await findUserByProperty('email',email)

}