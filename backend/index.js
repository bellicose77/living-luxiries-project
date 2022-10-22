const express = require('express');
const { default: mongoose } = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')
const app = express();
dotenv.config();
const port = 6000;

// data base connection 
const connect = async() =>{
    try{
      await mongoose.connect(process.env.MONGO);
      console.log("database connected")
    }catch(e){
        throw(e)
    }

}

app.listen(port, () => {
    connect()
    console.log(`Example app listening on port ${port}`)
  })
