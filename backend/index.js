import express from 'express'
import mongoose  from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors'
import authRoute from './routes/auth.js'
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

//error 

app.use((err,req,res,next)=>{
  console.log(err);
  return res.status(500).json({'message':"serverside error"})
})

app.use('/api/auth',authRoute);

app.listen(port, () => {
    connect()
    console.log(`Example app listening on port ${port}`)
  })
