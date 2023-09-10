const express=require('express');
const router = require('./src/Routes/api');

//import middleware
const app=new express();
const cookieParser=require('cookie-parser');
const bodyParser=require('body-parser');
const helmet=require('helmet');
const hpp= require('hpp');
const cors=require('cors');
const mongoSanitize =require('express-mongo-sanitize');
const rateLimit =require('express-rate-limit');
const mysql=require('mysql');
const mongoose=require('mongoose');
const multer=require('multer');
const jsonWebToken=require('jsonwebtoken');
const validator=require('validator');
const xss=require('xss');


//middleware used
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, 
	max: 100, 
	standardHeaders: 'draft-7',
	legacyHeaders: false,
})


app.use(cookieParser());
app.use(bodyParser.json());
app.use(helmet());
app.use(limiter);
app.use(hpp());
app.use(cors());
app.use(mongoSanitize());
app.use(express.json());



//Database Connection
//mongoose.connect('mongodb://127.0.0.1:27017/test').then(() => console.log('Connected!')).catch(err=>console.log(err))



//Defined Routes with version
app.use('/api/v1',router);


//Undefined Routes
app.use("*",(req,res)=>{
    res.status(404).json({status:"fail",data:"Not Found"})
})


module.exports=app;