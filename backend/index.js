const express = require('express');
const app = express();
const port = 6000;

const connect = async() =>{
    try{

    }catch(e){
        next(e)
    }

}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
