const todoModel=require('../models/todoSchema')

exports.find=async(payload)=>{
    return todoModel.find({})
    
  }

  exports.create=async(payload)=>{
    return todoModel.create(payload);
  }

  exports.update=async(res,payload)=>{
    // const {todoId,updatedTask}=payload;
    try {
      const task= await todoModel.findOne({_id:payload.todoId});
      // console.log(task);
      if(!task){
        return res.status(404).json({error: "User not Found"})
      }
      console.log(payload.updatedTask);
      console.log(payload.todoId);
      const obj= await todoModel.findOneAndUpdate({_id:payload.todoId},{$set: { task: payload.updatedTodo }},{new : true});
      return obj;
       
    } catch (error) {
      console.error("Error Updating Task",error);
      return res.status(500).json({error: 'Internal Server Error'})
      
    }
  }
  exports.delete=async(payload)=>{
   try{
    const todo=await todoModel.findOne({_id:payload.todoId});
    if(!todo){
      console.log("User Not Found");
      // return res.status(404).json({error: "No Such User"});
    }
     const deletedTodo=await todoModel.deleteOne({_id:payload.todoId});
     return deletedTodo;
   
   
    }
    catch(error){
      console.log('Error Deleting Todo',error);
      return res.status(500).json({error: 'Internal Server Error'})
    }
  }
  exports.deleteAll=async(payload)=>{
    try {
      let filter={};
      const todo=await todoModel.find({});
      if(!todo){
        return res.status(404).json({error: "No Todo to delete"});
      }
      const deletedTodos=await todoModel.deleteMany({})
      return deletedTodos;

    } catch (error) {
      console.log('Error Deleting Todo',error);
      return res.status(500).json({error: 'Internal Server Error'})
    }
  }