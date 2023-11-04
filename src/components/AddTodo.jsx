import React from 'react';


function AddTodo({todo,setTodo,addTodo}) {
   

  return (
    <div className='inp'>
        
            <input type="text" value={todo} onChange={(e) =>setTodo(e.target.value)} />
             <button  onClick={addTodo} placeholder='Enter a task'>Add Task</button>
        
    </div>
  )
}

export default AddTodo