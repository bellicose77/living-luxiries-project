export const error = (message="Something happend in server code",status=500) =>{

    const e = new Error(message);
    e.status=status;
    return e;

}