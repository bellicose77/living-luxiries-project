import { findUserByProperty } from "./user.js"

export const registerService = async ({name,email,password})=>{
    try{
        const user = await findUserByProperty('key',email)

    }catch(e){
        next(e);
    }
    


}