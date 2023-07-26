
const mongoose = require('mongoose');
const MONGODB_URI= "mongodb://127.0.0.1/Todos" // You can set your MongoDB URI in the environment variable


mongoose.connect(MONGODB_URI).then(
    console.log('Connected to the database!')).catch((e)=>{(
    console.log('Error connecting to the database:', e.message))
})