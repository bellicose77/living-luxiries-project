import { error } from "../utils/error.js";
import bcrypt from 'bcrypt';
import { findUserByProperty } from "./user.js"

export const registerService = async ({name,email,password})=>{
    try{
        const user = await findUserByProperty('key',email);
        if(user){
            throw error("User is already exits",400);
        }
        const saltRound =10;
        const salt = bcrypt.genSaltSync(saltRound);
        const hash = bcrypt.hashSync(password,salt);
        console.log("register api",name,email,password);

    }catch(e){
        next(e);
    }
    


}