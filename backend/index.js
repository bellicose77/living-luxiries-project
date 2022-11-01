import express from 'express'
import mongoose  from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors'
import routes from './routes/main.js'
const app = express();
dotenv.config();
const port = 8000;

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

// all endpoint routes 
app.use(routes);

// error handleing middelware 
app.use((err,req,res,next)=>{
  const message = err.message ? err.message : "Server side error";
  const status = err.status ? err.status : 500;
  return res.status(status).json(message);
})


app.listen(port, () => {
    connect()
    console.log(`Example app listening on port ${port}`)
  })
