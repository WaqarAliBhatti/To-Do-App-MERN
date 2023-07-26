const { catchAsync } = require('../helpers/request');
const service = require('../services/todoServices.js')

exports.todos = catchAsync(async (req, res, next) => {

    res.body = await service.viewTodo();
    res.json(res.body);
  });
  
exports.addTodos= catchAsync(async(req,res,next)=>{
    const payload ={
      task:req.body.task
    };
    res.body=await service.createTodo(payload);
    return res.json(res.body)
})

exports.updateTodo = catchAsync(async(req,res,next)=>{
  const payload={
    todoId:req.params.id,
    updatedTodo:req.body.task
  };
  res.body=await service.updateTodo(res,payload);
  return res.json(res.body);
  
})
 exports.deleteOne=catchAsync(async(req,res,next)=>{
  const payload={
    todoId:req.params.id
  }
  res.body=await service.deleteOne(payload);
  return res.json(res.body);
 })

 exports.deleteAll=catchAsync(async(req,res,next)=>{
  const payload={
    todoId:req.params.id
  }
  res.body=await service.deleteAll(payload);
  return res.json(res.body);
 })