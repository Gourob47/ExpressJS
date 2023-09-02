const express=require('express');
const router = require('./src/Routes/api');
const app=new express();

app.use('/api',router)


module.exports=app;