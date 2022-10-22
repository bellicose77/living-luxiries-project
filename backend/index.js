const express = require('express');
const { default: mongoose } = require('mongoose');t
const dotenv = require('dotenv');
const cors = require('cors')
const app = express();
const port = 6000;

// data base connection 
const connect = async() =>{
    try{
      await mongoose.connect(process.env.MONGO)
    }catch(e){
        next(e)
    }

}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
