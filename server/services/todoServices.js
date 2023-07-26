const todoRepo = require("../repositories/todo.js");


exports.viewTodo = async () => {
    todo = await todoRepo.find();
    return todo;
  };
  
  exports.createTodo= async (payload)=>{
    let task;
    const createPayload={
      task:payload.task
    };
    todo= await todoRepo.create(createPayload);
    console.log(todo);
    return{
      task:todo.task,
      success:true
    };
  }
  exports.updateTodo=async(res,payload)=>{
  let updatedTask;
  const createPayload={
    todoId:payload.todoId,
    updatedTodo:payload.updatedTodo
  }
  updatedTask=await todoRepo.update(res,createPayload);
  // updatedTask=
  console.log(updatedTask);
  return{
   updatedTask,
   success:true 
  }

  }

  exports.deleteOne=async(payload)=>{
    const deletedTodo=await todoRepo.delete(payload);
    return{
      deleted : deletedTodo,
      success:true
    }
  }

  exports.deleteAll=async(payload)=>{
    const deleteAll = await todoRepo.deleteAll(payload);
    return{
      deleted: deleteAll,
      success:true
    }
  }