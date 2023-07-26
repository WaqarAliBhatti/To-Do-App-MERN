const mongoose=require('mongoose')

const todoSchema=new mongoose.Schema({
    task:{
        type:String,
        required:true
    }
})

const createTodo=new mongoose.model('Todos',todoSchema);
module.exports=createTodo;