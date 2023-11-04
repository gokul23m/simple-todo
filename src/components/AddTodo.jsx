import React from 'react'

function AddTodo({todo,setTodo,addTodo}) {
   

  return (
    <div>
        
            <input type="text" value={todo} onChange={(e) =>setTodo(e.target.value)} />
             <button  onClick={addTodo}>Add Task</button>
        
    </div>
  )
}

export default AddTodo