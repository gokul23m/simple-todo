import React from 'react'

function TodoList({list,del}) {
  return (
    <div className='list'>
      {
        list.length > 0 ? (
             <ul className='item'>
                {
                  list.map((item) => (
                        <div>
                             <p>{item}</p>
                            <button onClick={()=>del(item)}>Delete</button>
                        </div>
                  ))   
                }
             </ul>

        ) 
        :
         ( 
             <p>No Pending works to do</p>
         )
      }
    </div>
  )
    
        
           
}

export default TodoList