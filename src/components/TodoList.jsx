import React from 'react'

function TodoList({list,del}) {
  return (
    <>
      {
        list.length > 0 ? (
             <ul>
                {
                  list.map((item) => (
                        <div>
                             <p>{item}</p>
                            <button onClick={()=>del(item)}></button>
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
    </>
  )
    
        
           
}

export default TodoList