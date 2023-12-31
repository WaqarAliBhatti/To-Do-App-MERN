import './App.css';
import Form from './components/Form';
import {Todos} from './components/Todos';
import { useDispatch,useSelector } from 'react-redux';
import { deleteAll } from './redux/todoapp/actions';
import { useState } from 'react';

function App() {
  const dispatch=useDispatch();
  const todos= useSelector((state)=>state.operationReducer);
  const [editFormVisibility,setEditFormVisibility]=useState(false);
  const [editTodo, setEditTodo]=useState('');

  const handleEditClick=(todo)=>{
    setEditFormVisibility(true)
    setEditTodo(todo);
  }
  
const cancelUpdate=()=>{
  setEditFormVisibility(false);
}

  console.log(todos.length);
  return (
    <div className="wrapper">
      <br />
     <h1 className='text-center'>My Tasks Today</h1>
     <Form editFormVisibility={editFormVisibility} editTodo={editTodo} cancelUpdate={cancelUpdate}></Form>
     <Todos handleEditClick={handleEditClick} editFormVisibility={editFormVisibility} />

{todos.length>1 &&(       <button className='btn btn-danger btn-md delete-all' onClick={()=>dispatch(deleteAll())}>DELETE ALL</button>)
}
     </div>
  );
}

export default App;
