export const registerService = async ({name,email,password})=>{
    const user = await findUserByProperty(email);


}