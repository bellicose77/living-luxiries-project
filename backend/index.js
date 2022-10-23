import express from 'express'
const { default: mongoose } = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoute = require('./routes/auth')
const app = express();
dotenv.config();
const port = 6000;

// data base connection 
const connect = async() =>{
    try{
      await mongoose.connect(process.env.MONGO);
      console.log("database connected");
    }catch(e){
        throw(e)
    }

};
// all middel ware
app.use(cors());
app.use(express.json());

app.use('/api/auth',authRoute);

app.listen(port, () => {
    connect()
    console.log(`Example app listening on port ${port}`)
  })
