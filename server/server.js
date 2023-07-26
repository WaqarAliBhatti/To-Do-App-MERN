const express=require('express')
const bodyParser=require('body-parser');
require('dotenv').config()
const port=process.env.PORT;

const app=express()

app.use(bodyParser.json());


const route=require('./routes/routes');
app.use(route);
app.listen(port,()=>{
    console.log('Server Running on port:'+port);
})
require('./db/connect');
