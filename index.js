import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
 import officeRoutes from './routes/Office.js';
// import {createEmployees} from "./routes/Office";


const app= express();
app.use('/office',officeRoutes)
 app.use(bodyParser.json({limit:"20mb",extended :true}));
 app.use(bodyParser.urlencoded({limit:"20mb",extended :true}));
 app.use('/createEmployees',createEmployees);

 app.use(cors());

 //mongoose.Promise = global.Promise;
 //const CONNECTION_URL = 'mongodb+srv://wedigtech:wedig@1992@wedig.ygkcr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
 const CONNECTION_URL='mongodb://localhost:27017/wedigtech'
 const PORT = process.env.PORT || 5000;

 mongoose.connect(CONNECTION_URL ,{
     useNewUrlParser:true,useUnifiedTopology:true
 }).then(() => app.listen(PORT,() => 
 console.log(`connection is established and running on port : ${PORT}`)
 )).catch((err)=>console.log(err.message))

 //mongoose.set('useFindAndModify',false);