const express=require('express');
const router=express.Router()
const controller=require('../controllers/todoController.js')



router.get('/showtodos',controller.todos);
router.post('/addtodo',controller.addTodos);
router.put('/update/:id',controller.updateTodo);
router.delete('/delete/:id',controller.deleteOne);
router.delete('/deleteall',controller.deleteAll);


module.exports= router;