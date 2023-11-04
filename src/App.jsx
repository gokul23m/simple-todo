import React ,{useState} from 'react';
import  "./App.css";
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {

  const[list,setList]=useState([]);
   const[todo,setTodo]=useState([]);

    const addTodo = () =>{
         setList([...list,todo]);
         setTodo("");
    }

    const del=(item)=>{
         const newList = list.filter((a) => { return a!== item})
         setList(newList);
         console.log(list);
    }

  return (
    <div className='App'>
       <div className="container">
       <AddTodo todo={todo} setTodo={setTodo} addTodo={addTodo}/>
       <TodoList list={list} del={del}/>
       </div>
    </div>
  )
}

export default App
